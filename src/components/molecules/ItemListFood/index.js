import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Rating} from '..';

const ItemListFood = ({image, onPress, items, rating}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>Baju HnM</Text>
          <Text style={styles.desc}>Stok : 90</Text>
          <Text style={styles.desc}>IDR 289.000</Text>
        </View>
        {items && !rating && (
          <Text style={styles.items}>Jumlah: {items} items</Text>
        )}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
});
