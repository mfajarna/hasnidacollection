import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DummyImg1, Ic_back_white} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const ItemDetail = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={DummyImg1} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <Ic_back_white />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Sepatu HnM</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Sepatu dengan kualitas tinggi dan juga mantap untuk digunakan
            sehari-hari, sepatu ini memiliki berbagai varian warna seperti
            hitam, merah dan abu-abu
          </Text>
          <Text style={styles.label}>Stok:</Text>
          <Text style={styles.desc}>90</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Harga:</Text>
            <Text style={styles.priceTotal}>IDR. 20.000.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
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
