import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Headers} from '../../components';

const Scan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Scan Barcode" subTitle="Scan barcode disini" />
      <View style={styles.camera}>
       <Text>Camera Box</Text>
      </View>
      <View style={styles.data}>
        <Text>Data</Text>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  camera:{
      flex: 1,
      paddingBottom: 100
  },
  container:{
    flex: 1,
  },
  data:{
    flex: 1,
    paddingHorizontal: 23,
    paddingTop: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});
