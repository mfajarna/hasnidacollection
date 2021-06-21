import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pakaian terlaris ..."></TextInput>
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
});
