import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView
} from 'react-native';
import {DummyImg3, Ic_back_white} from '../../assets';
import {Button, Counter, Gap, Number, Rating, SizeItem} from '../../components';
import {getData} from '../../utils/storage';

const ItemDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, stock, rate, price, url_barcode, photoBarcode, category} = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

    const scanMe = () => {
        Linking.openURL(url_barcode)
    }

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  const onCounterChange = value => {
    setTotalItem(value);

  };
  const totalPrice = totalItem * price;

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
        <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            {stock > 0 && (
              <Counter onValueChange={onCounterChange} stock={stock}/>
            )}
          </View>
          <Text style={styles.desc}>{description}</Text>
          <SizeItem category={category} />
          <Gap height={8} />
          <Text style={styles.label}>Stok:</Text>
          <Text style={styles.desc}>{stock}</Text>
          
          <TouchableOpacity style={styles.buttonScan} onPress={scanMe}>
              <Image style={styles.image} source={{ uri: photoBarcode }} />
          </TouchableOpacity>
          <Gap height={8} />
          <Text style={styles.labelNote}>*Note: Klik barcode untuk melihat informasi barang</Text>          
        </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Harga:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
          {stock > 0 && totalPrice > 0 && (
            <Button text="Pesan Sekarang" onPress={onOrder} />
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
  image:{
    marginTop: 5,
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom : 5
  },
  buttonScan: {

    borderRadius: 5,
  },
  textScanMe : {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
  labelNote: {
    fontSize: 13,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
  }
});
