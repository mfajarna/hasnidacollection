import React from 'react'
import { StyleSheet, Text, View, TextInput as TI  } from 'react-native'

const BidInput = ({placeholder, ...restProps}) => {
    return (
        <View style={styles.container}>
            <TI style={styles.textInput} placeholder={placeholder} {...restProps} />
        </View>
    )
}

export default BidInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width: 100    
    },
    textInput: {
        borderBottomWidth: 0.5,
        color: 'black',
        textAlign: 'center',
        alignItems: 'center'
    }
})
