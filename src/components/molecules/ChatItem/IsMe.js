import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IsMe = ({text, date}) => {
    return (
        <View style={styles.container}>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: '#8D92A3',
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginTop: 8,
  },
})
