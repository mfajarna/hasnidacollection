import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ChatItem, Headers, InputChat, ListAdmin } from '../../components'
import firebase from '../../config/Fire'
import { getData,getChatTime,setDateChat } from '../../utils'

const Chatting = ({navigation, route}) => {

    const dataAdmin = route.params;
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);


    useEffect(() =>{
        getDataUserFromLocal();
        const chatID = `${user.uid}_${dataAdmin.data.uid}`;
        const urlFirebase = `chatting/${chatID}/allChat/`;

        firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      })
    }, [dataAdmin.data.uid, user.uid])


      const getDataUserFromLocal = () => {
        getData('user').then(res => {
        setUser(res);
        });
     };


    const chatSend = () =>{
         const today = new Date();

         const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
         };

         const chatID = `${user.uid}_${dataAdmin.data.uid}`;
         const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
         const urlMessageUser = `messages/${user.uid}/${chatID}`;
         const urlMessageDoctor = `messages/${dataAdmin.data.uid}/${chatID}`;

        const dataHistoryChatForUser = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: dataAdmin.data.uid,
        };

            const dataHistoryChatForDoctor = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: user.uid,
        };

        firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        // set history for user
        firebase.database()
          .ref(urlMessageUser)
          .set(dataHistoryChatForUser);

        // set history for dataDoctor
        firebase.database()
          .ref(urlMessageDoctor)
          .set(dataHistoryChatForDoctor);
      })
      .catch(err => {
        showError(err.message);
      });
    }

    return (
        <View style={styles.pages}>
            <View>
                <Headers title="Messages" subTitle="Kirim pesan ke admin" onBack={() => navigation.goBack()} />
            </View>
            
            <View style={styles.wrapperMessage}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem key={itemChat.id}
                        isMe={isMe}
                        text={itemChat.data.chatContent}
                        date={itemChat.data.chatTime}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
            </View>

            <InputChat
            value={chatContent}
            onChangeText={value => setChatContent(value)}
            onButtonPress={chatSend}
            targetChat={dataAdmin}
            
            />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    pages: {
        flex: 1,
    },
    wrapperMessage: {
        flex:1,
        backgroundColor: '#FAFAFA'
    },
    category:{
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    chatDate: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginVertical: 20,
    textAlign: 'center',
  },
})
