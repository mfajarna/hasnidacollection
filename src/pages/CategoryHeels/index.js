import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers, HeelsTabSection} from '../../components'

const CategoryHeels = ({navigation}) => {
    return (
    <View style={styles.page}>
      <Headers
        title="Kategori Heels"
        subTitle="Cari heels favoritmu"
        onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
      />

      <View style={styles.tabContainer}>
        <HeelsTabSection />
      </View>
    </View>
    )
}

export default CategoryHeels

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
})
