import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Number, Rating} from '..';

const ItemListFood = ({
  image,
  onPress,
  items,
  stock,
  rating,
  price,
  type,
  name,
  date,
  status,
  number,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.desc} />
              <Text style={styles.desc}>Stock: {stock}</Text>
              {/* <Text style={styles.desc}>IDR {price}</Text> */}
            </View>
            <Rating number={rating} />
          </>
        );

      case 'order-summary':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} />
              {/* <Text style={styles.desc}>IDR {price}</Text> */}
            </View>

            <Text style={styles.items}>Jumlah: {items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . <Number number={price} />
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . <Number number={price} />
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>{stock}</Text>
              <Number number={price} style={styles.desc} />
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
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
  date: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#D9435E',
  },
});
