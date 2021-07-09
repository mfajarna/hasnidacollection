import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyAdmin } from '../../../assets'

const Other = ({text, date, photo}) => {
    return (
    <View style={styles.container}>
      <Image source={DummyAdmin} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    )
}

export default Other

const styles = StyleSheet.create({
container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginTop: 8,
  },
})
