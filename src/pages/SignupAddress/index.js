import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Headers, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {useForm} from '../../utils';

const SignupAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
    postal_code: '',
    kecamatan: '',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <View style={styles.page}>
      <Headers
        title="Alamat"
        subTitle="Pastikan memasukan data yang valid"
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TextInput
            label="No Handphone"
            placeholder="Masukan No Handphone"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Alamat"
            placeholder="Masukan Alamat anda"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="No Rumah"
            placeholder="Masukan No Rumah anda"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Kecamatan/Desa"
            placeholder="Masukan nama kecamatan/desa"
            value={form.kecamatan}
            onChangeText={value => setForm('kecamatan', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Kota/Kab"
            placeholder="Masukan nama kota/kab"
            value={form.city}
            onChangeText={value => setForm('city', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Kode Pos"
            placeholder="Masukan Kode Pos"
            value={form.postal_code}
            onChangeText={value => setForm('postal_code', value)}
          />
          <Gap height={20} />
          <Button text="Sign up now" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
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
