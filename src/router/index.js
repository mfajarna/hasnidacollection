import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Akun,
  Home,
  Keranjang,
  Scan,
  Signin,
  Signup,
  SignupAddress,
  SplashScreen,
  SuccessSignup,
  ItemDetail,
  OrderSummary,
  SuccessOrder,
  NotificationOrder,
  OrderDetail,
  CategoryPakaian,
  CategoryHeels,
  CategoryHijab,
  CategoryTas,
  CategoryBeauty,
  Pembelian,
  Messages,
  Chatting,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Keranjang" component={Keranjang} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Akun" component={Akun} />

    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupAddress"
        component={SignupAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignup"
        component={SuccessSignup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationOrder"
        component={NotificationOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryPakaian"
        component={CategoryPakaian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryHeels"
        component={CategoryHeels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryHijab"
        component={CategoryHijab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryTas"
        component={CategoryTas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryBeauty"
        component={CategoryBeauty}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembelian"
        component={Pembelian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
