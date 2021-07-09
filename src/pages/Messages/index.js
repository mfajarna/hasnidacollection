import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Headers, InputChat, ListAdmin } from '../../components'
import firebase from '../../config/Fire'
import { getData } from '../../utils'

const Messages = ({navigation}) => {
    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    
    useEffect(() =>{
        getDataUserFromLocal();
        const rootDB = firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messagesDB = rootDB.child(urlHistory);

        messagesDB.on('value', async snapshot => {
        if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidAdmin = `admin/${oldData[key].uidPartner}`;
          const detailAdmin = await rootDB.child(urlUidAdmin).once('value');
          data.push({
            id: key,
            detailAdmin: detailAdmin.val(),
            ...oldData[key],
          });

          console.log(data)
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
    },[user.uid])


    const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
    return (
        <View style={styles.pages}>
            <View>
                <Headers title="Messages" subTitle="Cek pesan dari admin disini!" />
                <View style={styles.chat}>
                    <View>
                {historyChat.map(chat => {
                    const dataAdmin = {
                        id: chat.detailAdmin.uid,
                        data: chat.detailAdmin
                    }
                    return(
                        <ListAdmin
                            key={chat.id}
                            name={chat.detailAdmin.name}    
                            desc={chat.lastContentChat}
                            onPress={() => navigation.navigate('Chatting', dataAdmin)}
                        />
                    )
                })}
                </View>
                </View>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white',
    },
    chat: {
        backgroundColor: 'white',
    }
})
