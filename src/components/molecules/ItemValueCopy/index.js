import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Clipboard, ToastAndroid} from 'react-native';
import { Number } from '..';
import { useState } from 'react';
import { Ic_copy } from '../../../assets';


const ItemValueCopy = ({label, value, valueColor = '#020202', type}) => {

    const[copyText,setCopyText] = useState('');

    const copyToClipboard = (value) => {
        Clipboard.setString(value);

        ToastAndroid.showWithGravity(
            "Copy to Clipboard",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
    };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.copy} onPress={() => copyToClipboard(value)}> 
          <Text style={styles.value(valueColor)}>{value}</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default ItemValueCopy;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginBottom: 3,
  },
  value: color => ({
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: color,
    width: 200,
    textAlign: 'right',
  }),
  copy: {
      flexDirection: 'row'
  }
});
