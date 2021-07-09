import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import {Button, Gap, Headers, TextInput} from '../../components';
import { signInAction } from '../../redux/action/auth';
import {getData, storeData, useForm} from '../../utils';
import firebase from '../../config/Fire'

const Signin = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(form.email, form.password)
    .then(res => {
      firebase.database()
      .ref(`users/${res.user.uid}/`)
      .once('value')
      .then(resDB => {
        if(resDB.val()){
          storeData('user', resDB.val())
        }
      })
    }).catch(err => {
      console.log('err', err)
    })
    dispatch(signInAction(form, navigation))
  };

  return (
    <View style={styles.page}>
      <Headers title="Sign in" subTitle="Cari barang terbaikmu disini" />
      <View style={styles.container}>
        <TextInput
          label="Email"
          placeholder="Masukan email anda"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Masukan password anda"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Signin;

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
});
