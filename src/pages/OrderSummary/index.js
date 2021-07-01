import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyImg1} from '../../assets';
import {Headers, ItemListFood, ItemValue} from '../../components/molecules';
import {Button} from '../../components/atoms';

const OrderSummary = ({navigation, route}) => {

  const {item, transaction, userProfile} = route.params;

  return (
    <View style={styles.container}>
      <Headers
        title="Pembayaran"
        subTitle="Silahkan cek pembayaran pesananmu"
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Informasi Order</Text>
          <ItemListFood
            type="order-summary"
            name={item.name}
            price={item.price}
            items={transaction.totalItem}
            image={{ uri: item.picturePath }}
          />
          <Text style={styles.label}>Informasi Transaksi</Text>
          <ItemValue label={item.name} value={transaction.totalPrice} type="currency" />
          <ItemValue label="Jasa 5%" value={transaction.jasa} type="currency"  />
          <ItemValue label="No. Transaksi" value="022303004185806" />
          <ItemValue
            label="Total Harga"
            value={transaction.total}
            valueColor="#1ABC9C"
            type="currency" 
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Informasi Pembeli:</Text>
          <ItemValue label="Nama" value={userProfile.name} />
          <ItemValue label="No. Handphone" value={userProfile.phoneNumber}/>
          <ItemValue label="Alamat" value={userProfile.address} />
          <ItemValue label="No Rumah" value={userProfile.houseNumber} />
          <ItemValue label="Kota" value={userProfile.city} />
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
