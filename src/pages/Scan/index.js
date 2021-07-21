import React from 'react';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {Headers} from '../../components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Scan = ({navigation}) => {

  const onSuccess = (e) => {
      Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  }
  return (
    <View style={styles.container}>
      <Headers title="Scan Barcode" subTitle="Scan barcode disini" />
      <View style={styles.camera}>
        <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  camera:{
      flex: 1,
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
