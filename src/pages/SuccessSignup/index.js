import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignup = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SuccessSignUp />
      <Gap height={10} />
      <Text style={styles.title}>Yeay! Berhasil</Text>
      <Text style={styles.subTitle}>Sekarang kamu dapat belanja</Text>
      <Text style={styles.subTitle}>
        sepuasnya untuk memenuhi penampilanmu!
      </Text>
      <Gap height={25} />
      <View style={styles.buttonContainer}>
        <Button
          text="Belanja Sekarang"
          onPress={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
        />
      </View>
    </View>
  );
};

export default SuccessSignup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    paddingHorizontal: 60,
    width: '100%',
  },
});
