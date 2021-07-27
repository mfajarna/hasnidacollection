import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {Gap, Number} from '../../../components';
import { Ic_arrow_next } from '../../../assets';



const TukarbarangItem = ({name,desc,quantity,status,total,onPress,harga, image}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.image}>
                <Image style={styles.image} source={{ uri:image }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Number number={harga} style={styles.desc} />
                <Text style={styles.desc}>{quantity} items</Text>
                <Text style={styles.descStatus}>{status}</Text>
                <Gap height={10} />
                <Text style={styles.text}>Total Harga <Number number={total} styles={styles.desc} /> </Text>
            </View>
            <View style={styles.icon}>
                <Ic_arrow_next />
            </View>
        </TouchableOpacity>
    )
}

export default TukarbarangItem

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 8,
        backgroundColor: '#CDC7BE',
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
        maxWidth: 200,
    },
    descStatus:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 13,
        color: '#50CB93'
    },
    content: {
       marginLeft: -60
    },
    icon:{
        justifyContent: 'center'
    }
})
