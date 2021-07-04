import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Ic_pakaian,
  Ic_hijab,
  Ic_heels,
  Ic_tas,
  Ic_beauty_care,
} from '../../../assets/icons';

const Kategori = ({onPress, label}) => {
  const Icon = () => {
    if (label === 'PAKAIAN') {
      return <Ic_pakaian />;
    }
    if (label === 'HIJAB') {
      return <Ic_hijab />;
    }
    if (label === 'HEELS') {
      return <Ic_heels />;
    }
    if (label === 'TAS') {
      return <Ic_tas />;
    }
    if (label === 'BEAUTY') {
      return <Ic_beauty_care />;
    }
    return <Ic_pakaian />;
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <Icon />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Kategori;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#FFFED8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 11,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 3,
  },
});
