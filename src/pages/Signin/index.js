import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Headers, TextInput} from '../../components';
import {useForm} from '../../utils';

const Signin = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    axios
      .post('http://ecommerce.iottelnet.com/api/login', form)
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('error', err);
      });
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
