import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, HijabTabSection } from '../../components'

const CategoryHijab = ({navigation}) => {
    return (
    <View style={styles.page}>
      <Headers
        title="Kategori Hijab"
        subTitle="Cari hijab favoritmu"
        onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
      />

      <View style={styles.tabContainer}>
        <HijabTabSection />
      </View>
    </View>
    )
}

export default CategoryHijab

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
})
