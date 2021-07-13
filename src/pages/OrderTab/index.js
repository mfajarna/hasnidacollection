import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, OrderTabSection } from '../../components'

const OrderTab = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title="Pesanan Saya" subTitle="Cek Pesanan Kamu" onBack={()=> navigation.goBack()} />
            <View style={styles.tabContainer}>
                <OrderTabSection />
            </View>
        </View>
    )
}

export default OrderTab

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1
    },
    page:{
        flex: 1,
    }
})
