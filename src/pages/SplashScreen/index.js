import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets/illustration';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
  }, []);
  return (
    <View style={styles.pages}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#FFFED8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
