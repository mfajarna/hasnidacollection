import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Headers, Select, TextInput} from '../../components';

const SignupAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers
        title="Alamat"
        subTitle="Pastikan memasukan data yang valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="No Handphone" placeholder="Masukan No Handphone" />
        <Gap height={16} />
        <TextInput label="Alamat" placeholder="Masukan Alamat anda" />
        <Gap height={16} />
        <TextInput label="No Rumah" placeholder="Masukan No Rumah anda" />
        <Gap height={16} />
        <Select label="Kota" />
        <Gap height={20} />
        <Button
          text="Sign up now"
          onPress={() => navigation.navigate('SuccessSignup')}
        />
      </View>
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
