import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, HomeTabSection, SearchInput } from '../../components'

const Pembelian = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title="Pembelian" subTitle="Silahkan memilih barang favoritmu" onBack={()=> navigation.reset({index: 0, routes:[{name: 'MainApp'}]})}/>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </View>
    )
}

export default Pembelian

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    tabContainer:{
        flex: 1,
    },
})
