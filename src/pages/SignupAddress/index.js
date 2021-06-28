import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Gap, Headers, Select, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignupAddress = ({navigation}) => {

  const [form,setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: ''
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer)

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer
    }

    console.log('data register: ',data)

    axios.post('http://ecommerce.iottelnet.com/api/register', data)
    .then((res) => {
      navigation.replace('SuccessSignup')
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    });
    
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow:1 }}>
    <View style={styles.page}>
      <Headers
        title="Alamat"
        subTitle="Pastikan memasukan data yang valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="No Handphone" placeholder="Masukan No Handphone" value={form.phoneNumber} onChangeText={(value) => setForm('phoneNumber', value)} />
        <Gap height={16} />
        <TextInput label="Alamat" placeholder="Masukan Alamat anda" value={form.address} onChangeText={(value) => setForm('address', value)} />
        <Gap height={16} />
        <TextInput label="No Rumah" placeholder="Masukan No Rumah anda" value={form.houseNumber} onChangeText={(value) => setForm('houseNumber', value)} />
        <Gap height={16} />
        <TextInput label="Kota" placeholder="Masukan nama kota" value={form.city} onChangeText={(value) => setForm('city', value)} />
        <Gap height={20} />
        <Button
          text="Sign up now"
          onPress={onSubmit}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default SignupAddress;

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
