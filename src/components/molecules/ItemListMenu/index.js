import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Ic_arrow_right,
  Ic_edit,
  Ic_help_center,
  Ic_home_address,
  Ic_payments,
  Ic_privacy,
  Ic_rate,
  Ic_security,
  Ic_terms,
} from '../../../assets';

const ItemListMenu = ({text, onPress}) => {
  const Icon = () => {
    if (text === 'Edit Profile') {
      return <Ic_edit />;
    }
    if (text === 'Home Address') {
      return <Ic_home_address />;
    }
    if (text === 'Security') {
      return <Ic_security />;
    }
    if (text === 'Payments') {
      return <Ic_payments />;
    }
    if (text === 'Rate App') {
      return <Ic_rate />;
    }
    if (text === 'Help Center') {
      return <Ic_help_center />;
    }
    if (text === 'Privacy & Policy') {
      return <Ic_privacy />;
    }
    if (text === 'Terms & Conditions') {
      return <Ic_terms />;
    }
    return <Ic_edit />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.label}>
        <Icon />
        <Text style={styles.text}>{text}</Text>
      </View>
      <Ic_arrow_right />
    </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
    marginLeft: 8,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
