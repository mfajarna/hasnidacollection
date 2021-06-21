import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Ic_lelang,
  Ic_pembelian,
  Ic_tentang_kami,
  Ic_tukar_barang,
} from '../../../assets/icons';

const Fitur = ({label, onPress}) => {
  const Icon = () => {
    if (label === 'Lelang Barang') {
      return <Ic_lelang />;
    }
    if (label === 'Pembelian') {
      return <Ic_pembelian />;
    }
    if (label === 'Tukar Barang') {
      return <Ic_tukar_barang />;
    }
    if (label === 'Tentang Kami') {
      return <Ic_tentang_kami />;
    }
    return <Ic_lelang />;
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.div}>
        <Icon />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fitur;

const styles = StyleSheet.create({
  div: {
    height: 60,
    backgroundColor: '#FFFED8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    elevation: 4,

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
  },
  text: {
    paddingLeft: 5,
    fontSize: 13,
    fontFamily: 'Nunito-SemiBold',
  },
});
