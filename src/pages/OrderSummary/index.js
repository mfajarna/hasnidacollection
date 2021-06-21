import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyImg1} from '../../assets';
import {Headers, ItemListFood, ItemValue} from '../../components/molecules';
import {Button} from '../../components/atoms';

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers
        title="Pembayaran"
        subTitle="Silahkan cek pembayaran pesananmu"
        onBack={() => {}}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Order Barang</Text>
          <ItemListFood image={DummyImg1} items={14} />
          <Text style={styles.label}>Informasi Transaksi</Text>
          <ItemValue label="Sepatu HnM" value="IDR 2.000.000" />
          <ItemValue label="Kurir Pengiriman" value="SiCepat-BEST" />
          <ItemValue label="No. Resi" value="022303004185806" />
          <ItemValue
            label="Total Harga"
            value="IDR 23.000.000"
            valueColor="#1ABC9C"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Informasi Pembeli:</Text>
          <ItemValue label="Nama" value="Muhammad Fajar" />
          <ItemValue label="No. Handphone" value="0822 8332 8833" />
          <ItemValue label="Alamat" value="Komp Permata Cimahi Raya Cimahi" />
          <ItemValue label="No Rumah" value="N16 no 7" />
          <ItemValue label="Kota" value="Cimahi" />
          <ItemValue label="Kode Pos" value="40288" />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          text="Bayar Sekarang"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

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
