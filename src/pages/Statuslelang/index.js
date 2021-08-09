import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, LelangTabSection } from '../../components'

const Statuslelang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Status Lelang" subTitle="Cek status barangmu disini" onBack={()=> navigation.goBack()} />
            <View style={styles.content}>
                <LelangTabSection />
            </View>
        </View>
    )
}

export default Statuslelang

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    content:{
        flex: 1,
        backgroundColor:'white'
    }
})
