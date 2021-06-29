import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1ABC9C" />
            <Text style={styles.loadling}>Loading ...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    loading: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        marginTop: 12,
    }
})
