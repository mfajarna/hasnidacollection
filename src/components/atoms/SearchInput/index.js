import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ic_bell, Ic_message } from '../../../assets';
import Gap from '../Gap';

const SearchInput = () => {
  return (    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pakaian terlaris ..."></TextInput>
          <View style={styles.icon}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('NotificationOrder')}>
            <Ic_bell />
          </TouchableOpacity>
          <Gap width={14} />
          <Ic_message />
        </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6F6F6',
    borderColor: '#020202',
    borderRadius: 8,
    padding: 2,
    paddingHorizontal: 10,
    fontFamily: 'Nunito-Light',
    color: 'black',
  },
  container: {},
    icon: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 10,
  },
});
