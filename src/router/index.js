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
  OrderDelivery,
  OrderTab,
  UploadBuktiBayar,
  LelangBarang,
  LelangProses,
  TukarBarang,
  TukarbarangDetail,
  TentangKami,
  UpdateBuktiPhoto,
  EditProfile,
  EditAdress,
  Payments,
  TestNotif,
  Statuslelang,
  LelangDetail,
  UploadBuktiLelang,
  RatingBintang,
} from '../pages';
import {BottomNavigator} from '../components';
import LelangDelivery from '../pages/LelangDelivery';
import Verified from '../pages/Verified';

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
      <Stack.Screen
        name="orderDelivery"
        component={OrderDelivery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KeranjangOrder"
        component={Keranjang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderTab"
        component={OrderTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadBuktiBayar"
        component={UploadBuktiBayar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangBarang"
        component={LelangBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangProses"
        component={LelangProses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TukarBarang"
        component={TukarBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TukarbarangDetail"
        component={TukarbarangDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TentangKami"
        component={TentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateBuktiPhoto"
        component={UpdateBuktiPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAdress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TestNotif"
        component={TestNotif}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StatusLelang"
        component={Statuslelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangDetail"
        component={LelangDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadBuktiLelang"
        component={UploadBuktiLelang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LelangDelivery"
        component={LelangDelivery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verified"
        component={Verified}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RatingBintang"
        component={RatingBintang}
        options={{headerShown: false}}
      />
            <Stack.Screen
        name="TesNotif"
        component={TestNotif}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
