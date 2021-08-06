import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Logo } from '../../assets'
import {Headers, Gap} from '../../components'

const TentangKami = ({navigation}) => {
    return (
        <View style={styles.container} >
            <Headers title="Tentang Kami" subTitle="Tentang Kami" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <Logo />
                <Gap height={10}/>
                <Text style={styles.text}>Jam kerja</Text>
                <Text style={styles.desc}>Senin - Jumat : 09.00 - 18.00</Text>
                <Text style={styles.desc}>Sabtu - Minggu : 08.00 - 17.00</Text>
                <View style={styles.div} />
                <Gap height={10} />
                <Text style={styles.text}>WhatsApp</Text>
                <Text style={styles.desc}>0813-9321-1636</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.desc}>nabilasal14@gmail.com</Text>
            </View>
        </View>
    )
}

export default TentangKami

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 10
    },
    text:{
        fontSize: 17,
        fontFamily: 'Nunito-Semibold',
    },
    desc:{
        fontSize: 15,
        fontFamily: 'Nunito-Light',
        marginBottom: 5,
    },
    div:{
        borderBottomWidth: 1
    }
})
