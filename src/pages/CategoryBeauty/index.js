import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {BeautyTabSection, Headers, HeelsTabSection} from '../../components'

const CategoryBeauty = ({navigation}) => {
    return (
    <View style={styles.page}>
      <Headers
        title="Kategori Beauty Care"
        subTitle="Cari beauty care favoritmu"
        onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
      />

      <View style={styles.tabContainer}>
        <BeautyTabSection />
      </View>
    </View>
    )
}

export default CategoryBeauty

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
})
