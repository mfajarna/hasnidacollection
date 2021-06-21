import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Headers, TextInput} from '../../components';

const Signin = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers title="Sign in" subTitle="Cari barang terbaikmu disini" />
      <View style={styles.container}>
        <TextInput label="Email" placeholder="Masukan email anda" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Masukan password anda" />
        <Gap height={24} />
        <Button text="Sign In" />
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
