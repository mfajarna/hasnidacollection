import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ic_btn_add, Ic_btn_min} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ic_btn_min />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <Ic_btn_add />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
