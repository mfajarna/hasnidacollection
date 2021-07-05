import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers, HeelsTabSection, TasTabSection} from '../../components'

const CategoryTas = ({navigation}) => {
    return (
    <View style={styles.page}>
      <Headers
        title="Kategori Tas"
        subTitle="Cari tas favoritmu"
        onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
      />

      <View style={styles.tabContainer}>
        <TasTabSection />
      </View>
    </View>
    )
}

export default CategoryTas

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
})
