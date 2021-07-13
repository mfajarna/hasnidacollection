import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Ic_checklist } from '../../assets';
import {ContentKeranjang, EmptyOrder, Headers, OrderTabSection} from '../../components/molecules';
import {getOrders} from '../../redux/action/order';

const Keranjang = ({navigation}) => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log('list orders: ', orders);
  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Headers title="Keranjang" subTitle="Cek pesananmu disini" />
          <View style={styles.tabContainer}>
            <View style={styles.checklist}>
              <View style={styles.pesanan}>
                <Ic_checklist />
                <Text style={styles.text}>Pesanan Saya</Text>
              </View>
              <View style={styles.contentKeranjang}>
                  <ContentKeranjang type="Belum Dibayar" onPress={() => navigation.navigate('OrderTab')} />
                  <ContentKeranjang type="Dikemas" onPress={() => navigation.navigate('OrderTab')} />
                  <ContentKeranjang type="Dikirim" onPress={() => navigation.navigate('OrderTab')} />
                  <ContentKeranjang type="Selesai" onPress={() => navigation.navigate('OrderTab')} />
              </View>
              <View>
                
              </View>
            </View>
            <View style={styles.additional}>

            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,

  },
  contentKeranjang:{
    paddingVertical: 10,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5
  },
  pesanan: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    
  },
  checklist:{
    backgroundColor: 'white',
    flex: 1,
  },
  additional :{ 
    flex : 1,
  },
  text:{
    fontSize: 14,
    fontFamily:'Nunito-Regular',
    marginLeft: 10,
  }
});
