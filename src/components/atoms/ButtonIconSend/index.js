import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ic_send } from '../../../assets'

const ButtonIconSend = ({disable, onPress}) => {
    if (disable) {
    return (
      <View style={styles.container(disable)}>
       <Ic_send />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
        <Ic_send />
    </TouchableOpacity>
  );
}

export default ButtonIconSend

const styles = StyleSheet.create({
    container: disable => ({
    backgroundColor: disable ? '#EDEEF0' : '#0066CB',
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
})
