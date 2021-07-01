import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ic_btn_add, Ic_btn_min} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value,setValue] = useState(1);
  
  useEffect(() => {
    onValueChange(value);
  }, [])

  const onCount =(type) => {
    let result = value;
    if(type === 'plus')
    {
      result = value+1;
    }if(type === 'minus')
    {
      if(value > 1){
       result = value-1;
      }
    }

    setValue(result)
    onValueChange(result)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Ic_btn_min />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
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
