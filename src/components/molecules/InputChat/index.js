import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ButtonIconSend } from '../../atoms'

const InputChat = ({value, onChangeText, onButtonPress, targetChat}) => {
    return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Tulis Pesan Untuk ${targetChat.data.name}`}
        value={value}
        onChangeText={onChangeText}
      />
    <ButtonIconSend
        disable={value.length < 1}
        onPress={onButtonPress}
    />
    </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {padding: 16, flexDirection: 'row', backgroundColor: '#FAFAFA'},
    input: {
      backgroundColor:'#EDEEF0',
      padding: 14,
      borderRadius: 10,
      flex: 1,
      marginRight: 10,
      fontSize: 14,
      fontFamily: 'Nunito-Regular',
      maxHeight: 45,
  },
})
