import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets/illustration';
import { getData } from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if(res)
        {
          navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
        }else{
          navigation.replace('SignIn')
        }
    });
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
