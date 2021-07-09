import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { DummyAdmin } from '../../../assets'

const AdminSection = ({onPress, name}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyAdmin} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.roles}>Klik untuk memberikan pesan ke admin!</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AdminSection

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#FFFED8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,

    },
    profile: {flex: 1},
    name: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  roles:{
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginTop: 2,
  },avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
})
