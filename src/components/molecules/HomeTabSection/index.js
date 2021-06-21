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
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      evelation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
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

const NewSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg2}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg3}
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </View>
  );
};

const PopularSection = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{paddingTop: 8, paddingHorizontal: 24}}
      onPress={() => navigation.navigate('ItemDetail')}>
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg2}
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </View>
  );
};

const RecommendedSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg2}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg3}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('ItemDetail')}
      />
      <ItemListFood
        rating={3}
        image={DummyImg1}
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Collection'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    first: NewSection,
    second: PopularSection,
    third: RecommendedSection,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
