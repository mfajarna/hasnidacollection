import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {DummyImg1, DummyImg2, DummyImg3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
  getConfirmation,
  getDelivery,
  getDone,
  getInProgress,
  getPastOrders,
} from '../../../redux/action/order';
import { Button } from '../../atoms';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      alignItems: 'space-around',
    }}
    style={{
      backgroundColor: 'white',
      evelation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    contentContainerStyle={{
      justifyContent: 'space-around',
    }}
    tabStyle={{elevation: 0}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontFamily: 'Nunito-Regular',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <ScrollView>
     
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map(order => {
          return (
            <ItemListFood
              key={order.id}
              rating={order.collection.rate}
              image={{uri: order.collection.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              onPressBayar={() => navigation.navigate('UploadBuktiBayar', order)}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.collection.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};


const Delivery = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {delivery} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getDelivery());
  }, []);

  return (
    <ScrollView>
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {delivery.map(order => {
        return (
          <ItemListFood
            key={order.id}
            rating={order.collection.rate}
            image={{uri: order.collection.picturePath}}
            onPress={() => navigation.navigate('orderDelivery', order)}
            type="on-delivered"
            items={order.quantity}
            price={order.total}
            name={order.collection.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
    </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <ScrollView>
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map(order => {
        return (

          <ItemListFood
            key={order.id}
            rating={order.collection.rate}
            image={{uri: order.collection.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.collection.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
    </View>
    </ScrollView>
  );
};

const Konfirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {confirmation} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getConfirmation());
    console.log(confirmation)
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {confirmation.map(order => {
          return (
            <ItemListFood
              key={order.id}
              rating={order.collection.rate}
              image={{uri: order.collection.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="confirmation"
              items={order.quantity}
              price={order.total}
              name={order.collection.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Belum Bayar'},
    {key: 'second', title: 'Dikemas'},
    {key: 'third', title: 'Dikirim'},
    {key: 'fourth', title: 'Selesai'}
  ]);

  const renderScene = SceneMap({
    first: InProgress,
    second: Konfirmation,
    third: Delivery,
    fourth: PastOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
