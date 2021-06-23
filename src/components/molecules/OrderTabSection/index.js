import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {DummyImg1, DummyImg2, DummyImg3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

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
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sepatu HnM"
      />
      <ItemListFood
        rating={3}
        image={DummyImg2}
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        type="in-progress"
        items={2}
        price="4.000.000"
        name="Baju HnM"
      />
      <ItemListFood
        rating={3}
        image={DummyImg3}
        onPress={() => navigation.navigate('OrderDetail')}
        inProgress
        type="in-progress"
        items={1}
        price="1.500.000"
        name="Tas Gucci"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{paddingTop: 8, paddingHorizontal: 24}}
      onPress={() => navigation.navigate('OrderDetail')}>
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={1}
        price="1.500.000"
        name="Tas Gucci"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        rating={3}
        image={DummyImg2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={1}
        price="1.500.000"
        name="Tas Gucci"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    first: InProgress,
    second: PastOrders,
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
