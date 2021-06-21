import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Headers, TextInput} from '../../components';

const Signup = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers
        title="Sign up"
        subTitle="Daftar dan mulai belanja"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Nama Lengkap" placeholder="Masukan Nama Lengkap" />
        <Gap height={16} />
        <TextInput label="Email" placeholder="Masukan Email anda" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Masukan password anda" />
        <Gap height={20} />
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SignupAddress')}
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
});
