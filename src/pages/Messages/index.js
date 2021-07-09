import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components'

const Messages = () => {
    return (
        <View style={styles.pages}>
            <Headers title="Messages" subTitle="Kirim pesan ke admin" />
            <View style={styles.wrapperMessage}>
                <View style={styles.category}>
                    
                </View>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        flex: 1,
    },
    wrapperMessage: {

    }
})
