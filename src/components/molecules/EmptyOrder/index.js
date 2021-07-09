import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Il_empty_order} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Il_empty_order />
      <Gap height={10} />
      <Text style={styles.title}>Orderanmu kosong!</Text>
      <Text style={styles.subTitle}>Cari beberapa barang</Text>
      <Text style={styles.subTitle}>untukmu hari ini!</Text>
      <Gap height={25} />
      <View style={styles.buttonContainer}>
        <Button
          text="Belanja Sekarang"
          onPress={() => navigation.replace('Pembelian')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
