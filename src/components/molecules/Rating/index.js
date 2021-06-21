import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ic_star, Ic_star_off} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <Ic_star />
        <Ic_star />
        <Ic_star />
        <Ic_star />
        <Ic_star_off />
      </View>
      <Text style={styles.text}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
  text: {
    fontSize: 12,
    marginLeft: 4,
    color: '#8D92A3',
  },
});
