import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Number} from '../../molecules';

const UserLelang = ({name,jumlah_bid}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Atas Nama: {name}</Text>
            <Text><Number number={jumlah_bid} /></Text>
        </View>
    )
}

export default UserLelang

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5
    },text:{
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold'
    }
})
