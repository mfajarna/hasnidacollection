import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder, Headers, OrderTabSection} from '../../components/molecules';


const Keranjang = () => {
 const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Headers
            title="Keranjang"
            subTitle="Cek pesananmu disini"
          />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
   page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
