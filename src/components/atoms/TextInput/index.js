import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRn} from 'react-native';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRn style={styles.input} placeholder={placeholder}></TextInputRn>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 3,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 7,
  },
});
