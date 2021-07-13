import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components/molecules'

const UploadBuktiBayar = ({navigation}) => {
    return (
        <View>
            <Headers title="Upload Bukti Bayar" subTitle="Silahkan upload bukti bayar disini!" onBack={()=> navigation.goBack()} />
        </View>
    )
}

export default UploadBuktiBayar

const styles = StyleSheet.create({})
