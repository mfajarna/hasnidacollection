import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Number } from '..';
import {Ic_star, Ic_star_off} from '../../../assets';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for(let i = 1 ; i<=5 ; i++)
    {
      if(i <= number){
        star.push(<Ic_star key={i} />)
      }else{
        star.push(<Ic_star_off key={i} />)
      }
    }

    return star;
  }

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {renderStar()}
      </View>
      <Number type="decimal" number={number} style={styles.text} />
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
