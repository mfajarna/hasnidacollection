import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {ProfileTabSection} from '../../components/molecules';
import { getDataProfile } from '../../redux/action';
import { getData } from '../../utils/storage';

const Akun = () => {

  const [userProfile,setUserProfile] = useState({});

   const dispatch = useDispatch();
    

    useEffect(() =>  {
        dispatch(getDataProfile())
    }, []);

    const{dataUser} = useSelector(state => state.lelangReducer)
 

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={{ uri: dataUser.profile_photo_url }} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>{dataUser.name}</Text>
        <Text style={styles.email}>{dataUser.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 100,
    height: 100,
    borderStyle: 'dashed',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Nunito-light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
