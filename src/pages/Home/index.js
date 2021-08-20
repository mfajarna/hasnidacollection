import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';

import {Fitur, Gap, Kategori, SearchInput} from '../../components/atoms';
import {AdminSection, HomeTabSection, WelcomeUser} from '../../components/molecules';
import firebase from '../../config/Fire'
import { getData, showNotification } from '../../utils';
import NotifService from '../../NotifService';

const Home = ({onPress, navigation}) => {
    const [admin, setAdmin] = useState([]);
  
    const[registerToken,setRegisterToken] = useState('');
    const[fcmRegistered,setFcmRegistered] = useState(false);
    var [emailVerified, setEmailVerified] = useState(Boolean);

    const onRegister = (token) => {
        setRegisterToken(token.token);
        setFcmRegistered(true);
    }

    const onNotif = (notif) => {
        
        notifikasi.localNotif(notif.message)
    }

    const notifikasi = new NotifService(onRegister,onNotif);

    const handlePerm = (perms) => {
        Alert.alert('Permission',  JSON.stringify(perms));
    }

    notifikasi.requestPermissions();

    

  useEffect(() =>{
    getAdmin();
    getUserData();
    getStateFirebase();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
    });
  };

  

  const getStateFirebase = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user)
      {
        var user = firebase.auth().currentUser;

        if(user != null)
        {
         var email_verified =  user.emailVerified;
         setEmailVerified(email_verified)
        }
      }
    })
  }

  console.log(emailVerified)

  const getAdmin = () => {
    firebase.database()
      .ref('admin/')
      .limitToLast(3)
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

  return (
    <View style={styles.pages}>
      <View style={styles.nav}>
        <View style={styles.header}>
          <WelcomeUser />
        </View>
      </View>
      <Gap height={10} />
      
        <Text style={styles.text}>Mau belanja apa</Text>
        {emailVerified  == false && (
          <Text>isFalse</Text>
        )}
        <Text style={styles.text}>hari ini ?</Text>
        <Gap height={30} />
  <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.page}>
          <Text style={styles.textFitur}>Fitur Kami</Text>
          <Gap height={12} />
          <View style={styles.fitur}>
            <View style={styles.content}>

              <Fitur label="Lelang Barang" onPress={() => navigation.navigate('LelangBarang')}  />
            </View>
            <View style={styles.content}>
              <Fitur label="Pembelian" onPress={() => navigation.navigate('Pembelian')} />
            </View>
          </View>
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Tukar Barang" onPress={() => navigation.navigate('TukarBarang')}/>
            </View>
            <View style={styles.content}>
              <Fitur label="Tentang Kami" onPress={() => navigation.navigate('TentangKami')} />
            </View>
          </View>
          <Gap height={10} />
          <Text style={styles.textFitur}>Pilih Kategori</Text>
          <Gap height={12} />
          <View style={styles.kategori}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategoriItem}>
                <Kategori
                  label="PAKAIAN"
                  onPress={() => navigation.navigate('CategoryPakaian')}
                />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="HEELS"  onPress={() => navigation.navigate('CategoryHeels') } />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="HIJAB" onPress={() => navigation.navigate('CategoryHijab') } />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="BEAUTY" onPress={() => navigation.navigate('CategoryBeauty') } />
              </View>
            </ScrollView>
          </View>
  
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
  },
  page: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
  },
  pages: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  adminSection:{
    marginBottom: 15,
  },    
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    paddingHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 10,
  },
  textFitur: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  fitur: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 9,
  },
  kategori: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  kategoriItem: {
    paddingRight: 5,
    marginLeft: 5,
    width: 85,
    paddingVertical: 10,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
  admin:{
    marginTop: 15,
  }
});
