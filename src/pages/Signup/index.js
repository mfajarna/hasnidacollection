import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button, Gap, Headers, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';


const Signup = ({navigation}) => {
  const[form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(form);
    dispatch({
      type: 'SET_REGISTER',
      value: form
    })
    navigation.navigate('SignupAddress')
  }

  const addPhoto = () => {
      ImagePicker.launchImageLibrary(
      {
        quality: 0.1,
        maxWidth: 200,
        maxHeight: 200
      }, 
      (response) => {
      console.log('Response = ', response);

      if(response.didCancel || response.error)
      {
        console.log('Anda tidak memilih photo');
        showMessage('Anda tidak memilih photo');
      }else{
        const source = {uri: response.uri}
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName
        };

        setPhoto(source);
        dispatch({type:'SET_PHOTO', value: dataImage});
        dispatch({type:'SET_UPLOAD_STATUS', value: true})
      }
    }
   );
  }
  return (
    <View style={styles.page}>
      <Headers
        title="Sign up"
        subTitle="Daftar dan mulai belanja"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <TouchableOpacity onPress={addPhoto}>
            <View style={styles.borderPhoto}>
              {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>}
              
            </View>
          </TouchableOpacity>
        </View>
    
        <TextInput 
          label="Nama Lengkap" 
          placeholder="Masukan Nama Lengkap" 
          value={form.name} 
          onChangeText={(value) => setForm('name', value)} />
        <Gap height={16} />
        <TextInput 
          label="Email" 
          placeholder="Masukan Email anda"
          value={form.email} 
          onChangeText={(value) => setForm('email', value)} />
        <Gap height={16} />
        <TextInput 
          label="Password" 
          placeholder="Masukan password anda"
          value={form.password} 
          onChangeText={(value) => setForm('password', value)} 
          secureTextEntry />
        <Gap height={20} />
        <Button
          text="Continue"
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  page: {
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: -10,
    marginBottom: 5,
  },
  photoImage:{
    width: 80,
    height: 80,
    borderRadius: 80,
  }
});
