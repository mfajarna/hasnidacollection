import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { RefreshControl, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import firebase from '../../config/Fire'
import { showMessage } from '../../utils';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Verified = ({navigation}) => {
    var [emailVerified, setEmailVerified] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        getStateFirebase();
    }, []);

    const getStateFirebase = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user)
      {
        var user = firebase.auth().currentUser;

        if(user != null)
        {
         var email_verified =  user.emailVerified;
         console.log('email verif', email_verified)
         setEmailVerified(email_verified)
        
        //  if(email_verified == true)
        //  {
        //      navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
        //  }
        }
      }
    })
  }

  

    const onLogout = () => {
        firebase.auth().signOut();
        
        AsyncStorage.multiRemove(['userProfile','token']).then(()=> {
        navigation.reset({index: 0, routes:[{name: 'SignIn'}]})   
      })
    }

    
  const sendVerification = () => {

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(res =>{
      showMessage('Silahkan cek email untuk verifikasi email!', 'success')
    }).catch(err => {
      showMessage('Gagal verifikasi email!')
    })
    
    firebase.auth().signOut();
    AsyncStorage.multiRemove(['userProfile','token']).then(()=> {
        navigation.reset({index: 0, routes:[{name: 'SignIn'}]})   
      })
    
  }


    return (
        <View style={styles.container} >
            <ScrollView
                contentContainerStyle={styles.scrollView}
                        refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
        }
            >
                
         
          <Text style={styles.text}>Anda Belum Verifikasi Email</Text>
         <View style={styles.button}>
             <TouchableOpacity style={styles.contentButton} onPress={sendVerification}>
               <Text>Verifikasi Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentButtonLogout} onPress={onLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
           </ScrollView>
        </View>
    )
}

export default Verified

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18
  },
  button:{
    flexDirection: 'row'
  },
  contentButton: {
    padding: 8,
    borderRadius: 9,
    backgroundColor: '#50CB93',
    marginRight: 5,
    marginTop: 5,
  },
    contentButtonLogout: {
    padding: 8,
    borderRadius: 9,
    borderColor: '#FF2626',
    borderWidth: 1,
    marginRight: 5,
    marginTop: 5,
  },
    scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
