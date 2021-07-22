import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers} from '../../components'


const LelangBarang = ({navigation}) => {
    return (
        <View>
            <Headers title="Lelang Barang" subTitle="Cari barang lelang disini" onBack={() => navigation.goBack()} />
        </View>
    )
}

export default LelangBarang

const styles = StyleSheet.create({})
