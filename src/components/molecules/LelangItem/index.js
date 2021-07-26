import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {Number} from '../../molecules';
import { Gap } from '../..';
import { Ic_arrow_next } from '../../../assets';

const LelangItem = ({image,name,desc,price,bid,onPress}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.image}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Number number={price} style={styles.desc} />
                <Gap height={10} />
                <Text style={styles.text}>Open Bid: <Number number={bid} styles={styles.desc} /> </Text>
            </View>
            <View style={styles.icon}>
                <Ic_arrow_next />
            </View>
        </TouchableOpacity>
    )
}

export default LelangItem

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingHorizontal: 9,
        borderRadius: 9,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
                },
    image:{
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    text:{
        fontSize: 15,
        fontFamily: 'Nunito-SemiBold',
    },
    desc:{
        fontFamily: 'Nunito-Light',
        fontSize: 13,
    },
    content: {
       marginLeft: -60
    },
    icon:{
        justifyContent: 'center'
    }
})
