import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Il_success_order} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Il_success_order />
      <Gap height={10} />
      <Text style={styles.title}>Pesanan Berhasil!</Text>
      <Text style={styles.subTitle}>Mohon ditunggu ya sembari kita</Text>
      <Text style={styles.subTitle}>memproses orderannya</Text>
      <Gap height={25} />
      <View style={styles.buttonContainer}>
        <Button
          text="Buat Pesanan Lainnya"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button text="Lihat Pesananku" color="#8D92A3" textColor="white" onPress={() => navigation.navigate('Keranjang')} />
      </View>
    </View>
  );
};

export default SuccessOrder;

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
