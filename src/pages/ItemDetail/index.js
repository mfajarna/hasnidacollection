import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Ic_back_white} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';
import {getData} from '../../utils/storage';

const ItemDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, stock, rate, price} = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + tax;

    const data = {
      item: {
        id: id,
        name: name,
        price: price,
        stock: stock,
        picturePath: picturePath,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        jasa: tax,
        total: total,
      },
      userProfile,
    };
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.pages}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Ic_back_white />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Stok:</Text>
          <Text style={styles.desc}>{stock}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Harga:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
          {stock > 1 && (
            <Button text="Order Now" onPress={onOrder} />
          )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  cover: {
    height: 280,
    paddingTop: 26,
    paddingLeft: 23,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    backgroundColor: 'white',
    paddingTop: 25,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  button: {
    width: 160,
  },
  priceContainer: {
    flex: 1,
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
  },
});
