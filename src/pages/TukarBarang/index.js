import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers,Gap, TukarbarangItem, TukarBarangTab } from '../../components'
import { getPastOrders } from '../../redux/action'

const TukarBarang = ({navigation}) => {
    const dispatch = useDispatch();
    const{pastOrders} = useSelector(state => state.orderReducer);
    useEffect(() => {
        dispatch(getPastOrders())
    },[])

    return (
        <View style={styles.container}>
            <Headers title="Tukar Barang" subTitle="Tukar barang orderan disini" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.header}>Pilih barang yang ingin ditukar!</Text>
                <Gap height={10} />
                    <View style={styles.contentBarang}>
                        <ScrollView>
                    {pastOrders.map(item => {
                        return(
                            <TukarbarangItem
                                key={item.id}
                                name={item.collection.name}
                                desc={item.collection.description}
                                harga={item.collection.price}
                                image={item.collection.picturePath}
                                quantity={item.quantity}
                                total={item.total}
                                status={item.status}
                                onPress={() => navigation.navigate('TukarbarangDetail', item)}
                            />
                        )
                    })}
                           </ScrollView>
                     </View>
            </View>
                <View style={styles.tabContainer}>
                        <TukarBarangTab />
                </View>
        </View>
    )
}

export default TukarBarang

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: 'white'
    },
    header:{
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        
    },
    contentBarang:{
        flex: 1,
        backgroundColor: 'white'
    },
    tabContainer:{
        flex: 1
    }
})
