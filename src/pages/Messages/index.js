import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { Headers, InputChat, ListAdmin, AdminSection } from '../../components'
import firebase from '../../config/Fire'
import { setNotification } from '../../redux/action'
import { getData, pushNotification } from '../../utils'

const Messages = ({navigation}) => {
    const [admin, setAdmin] = useState([]);
    const dispatch = useDispatch();

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
    });
  };

    const getAdmin = () => {
    firebase.database()
      .ref('admin/')
      // .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
         
          setAdmin(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }
    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    
    useEffect(() =>{
        getAdmin();
        getUserData();
        navigation.addListener('focus', () => {
        getUserData();
        });

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
          pushNotification.kirimNotifikasi(`Ada Pesan Baru Dari Admin ${data[1].detailAdmin.name}`)
          console.log(data[1].detailAdmin.email)
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
    },[user.uid,navigation])


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

                {admin.map(admin => {
                  return(
                    <AdminSection
                      key={admin.id} 
                      name={admin.data.name}
                      onPress={() => navigation.navigate('Chatting', admin)}
                      />
                    )
                })}
                {/* {historyChat.map(chat => {
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
                })} */}


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
        marginBottom: 15,
        paddingHorizontal: 25,
    }
})
