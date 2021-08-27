import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyImg1} from '../../assets';
import {Headers, ItemListFood, ItemValue} from '../../components/molecules';
import {Button} from '../../components/atoms';
import axios from 'axios';
import { API_HOST, getData, showMessage } from '../../utils';

const OrderDelivery = ({route, navigation}) => {

  const order = route.params;

  console.log(order)
  const onDelivered = () => {

    const data = {
      status: 'DONE'
    }

    getData('token').then(resToken => {
        axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
        headers: {
            'Authorization' : resToken.value
          }
        })
      .then(res => {
        console.log('Berhasil Diterima')
    }).catch(err => {
      console.log(err)
    })
    })

    navigation.navigate('RatingBintang', order)
  }
  return (
    <View style={styles.container}>
      <Headers
        title="Pembayaran"
        subTitle="Silahkan cek pembayaran pesananmu"
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Order Barang</Text>
          <ItemListFood
            type="order-summary"
            name={order.collection.name}
            price={order.collection.price}
            items={order.quantity}
            image={{ uri: order.collection.picturePath }}
          />
          <Text style={styles.label}>Informasi Transaksi</Text>
          <ItemValue label={order.collection.name} value={order.collection.price} type="currency"/>
          <ItemValue label="Kurir Pengiriman" value="SiCepat-BEST" />
          <ItemValue label="No. Transaksi" value="022303004185806" />
          <ItemValue
            label="Total Harga"
            value={order.total}
            type="currency"
            valueColor="#1ABC9C"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Informasi Pembeli:</Text>
          <ItemValue label="Nama" value={order.user.name} />
          <ItemValue label="No. Handphone" value={order.user.phoneNumber} />
          <ItemValue label="Alamat" value={order.user.address} />
          <ItemValue label="No Rumah" value={order.user.houseNumber} />
          <ItemValue label="Kota/Kab" value={order.user.city} />
          <ItemValue label="Kecamatan" value={order.user.kecamatan} />
          <ItemValue label="Kode Pos" value={order.user.postal_code} />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label={`HSND${order.id}`} value={order.status} valueColor={order.status === 'CANCELLED' ? 'red' : '#1ABC9C'} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        {order.status === 'ON_DELIVERY' && (
          <Button
          text="Paket Diterima"
          onPress={onDelivered}
          color="#1ABC9C"
          textColor="white"
        />
        )}
        
      </View>
    </View>
  );
};

export default OrderDelivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 20,
    flex: 1,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginBottom: 8,
    color: '#020202',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
});
