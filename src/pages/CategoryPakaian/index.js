import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Headers, PakaianTabSection} from '../../components';

const CategoryPakaian = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers
        title="Kategori Pakaian"
        subTitle="Cari pakaian favoritmu"
        onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})}
      />

      <View style={styles.tabContainer}>
        <PakaianTabSection />
      </View>
    </View>
  );
};

export default CategoryPakaian;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
});
