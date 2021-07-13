import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ic_belum_bayar, Ic_dikemas, Ic_dikirim, Ic_selesai } from '../../../assets'

const ContentKeranjang = ({type, onPress}) => {

    const IconKeranjang = () =>{
        if(type === 'Belum Dibayar')
        {
            return <Ic_belum_bayar />  
        }
        if(type === 'Dikemas')
        {
            return <Ic_dikemas />
        }
        if(type === 'Dikirim')
        {
            return <Ic_dikirim />
        }
        if(type === 'Selesai')
        {
            return <Ic_selesai />
        }
    }

    return (
        <TouchableOpacity style={styles.page} onPress={onPress}>
            <View style={styles.content}>
                <IconKeranjang />
                <Text style={styles.text}>{type}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ContentKeranjang

const styles = StyleSheet.create({
    page:{
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    content:{
        alignItems:"center",
        paddingTop: 10,
        
    },
    text:{
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        marginTop: 8,
    }
})
