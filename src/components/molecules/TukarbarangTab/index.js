import React, { useEffect } from 'react'
import { StyleSheet, Text, View , Dimensions, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { getPastOrders, getTukarBarang, getTukarBarangKonfirmasi } from '../../../redux/action';
import ItemListFood from '../ItemListFood';

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



const Pending = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataTukarBarang} = useSelector(state => state.tukarBarangReducer);
  useEffect(() => {
    dispatch(getTukarBarang());
  }, []);

  return (
    <ScrollView>
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {dataTukarBarang.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.collection.picturePath}}
            type="tukar-barang"
            desc={order.alasan_tukar_barang}
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

const InConfirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataKonfirmasi} = useSelector(state => state.tukarBarangReducer);
  useEffect(() => {
    dispatch(getTukarBarangKonfirmasi());
  }, []);

  return (
    <ScrollView>
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {dataKonfirmasi.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.collection.picturePath}}
            type="tukar-barang"
            desc={order.alasan_tukar_barang}
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


const initialLayout = {width: Dimensions.get('window').width};

const TukarBarangTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Pending'},
    {key: 'second', title: 'Konfirmasi'},
  ]);

  const renderScene = SceneMap({
    first: Pending,
    second: InConfirmation

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

export default TukarBarangTab;

const styles = StyleSheet.create({});

