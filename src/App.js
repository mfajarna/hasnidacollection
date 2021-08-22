import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Router from './router';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import { Loading } from './components';
import { LogBox } from 'react-native';



const MainApp = () => {
  const {isLoading,isNotification} = useSelector((state) => state.globalReducer);
  
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return(
     <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
        {isLoading && <Loading />}
     </NavigationContainer>
  )
}

const App = () => {
  return( 
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;


