import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Number, Rating} from '..';
import { API_HOST, getData, showMessage } from '../../../utils';

const ItemListFood = ({
  image,
  onPress,
  onPressBayar,
  items,
  stock,
  rating,
  price,
  type,
  name,
  date,
  status,
  desc,
  number,
  onPress2,
  id,
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
    
        case 'lelang-confirmation':
          return(
            <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items}bid lelang <Number number={price} />
              </Text>
            </View>
            </>
          )
        case 'lelang-dikemas':
          return(
            <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items}bid lelang <Number number={price} />
              </Text>
            </View>
            </>
          )
        case 'confirmation':
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
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );

        case 'tukar-barang':
          const formatedDatex = new Date(date).toDateString();
          return (
            <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {desc}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{formatedDatex}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );

        case 'on-delivered':
          const x = new Date(date).toDateString();
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . <Number number={price} />
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{x}</Text>
              <Text style={styles.statusDelivery}>{status}</Text>
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

  const dataKonfirmasi = {
    status: 'DIKIRIM_PEMBELI'
  }

    const dataDone = {
    status: 'DITERIMA_PEMBELI'
  }

  const navigation = useNavigation();


  const onKonfirmasi = () => {
    getData('token').then(resToken => {
      axios.post(`${API_HOST.url}/statusBarang/${id}`, dataKonfirmasi, {
                headers : {
                    Authorization: resToken.value
              }
          }).then(res => {
                console.log(res)
                showMessage('Berhasil update status', 'success');
                navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
        })
    })
  }

    const onDone = () => {
    getData('token').then(resToken => {
      axios.post(`${API_HOST.url}/statusBarang/${id}`, dataDone, {
                headers : {
                    Authorization: resToken.value
              }
          }).then(res => {
                console.log(res)
                showMessage('Berhasil update status', 'success');
                navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
        })
    })
  }

  const buttonRender = () =>{
    if(type === 'in-progress')
    {
      return (
        <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onPressBayar}>
                <Text style={styles.textBayar}>Bayar</Text>
        </TouchableOpacity>
      )
    }
    if(type === 'lelang-confirmation')
    {
      return (
        <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onPressBayar}>
                <Text style={styles.textBayar}>Bayar</Text>
        </TouchableOpacity>
      )
    }
    if(status === 'KONFIRMASI')
    {
      return (
        <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onKonfirmasi}>
                <Text style={styles.textBayar}>DELIVERY</Text>
        </TouchableOpacity>
      )
    }
    if(status === 'DIKIRIM_ADMIN')
    {
      return (
        <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onDone}>
                <Text style={styles.textBayar}>DONE</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
        {buttonRender()}
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
  status : (status) => ({
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  statusDelivery: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#1ABC9C',
  },
  buttonBayar: {
    backgroundColor: '#26B99A',
    padding: 6,
    borderRadius: 3,
    marginLeft: 5
  },
  textBayar:{
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: 'white'
  }
});
