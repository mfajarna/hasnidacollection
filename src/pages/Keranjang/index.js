import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Ic_bank_account, Ic_checklist } from '../../assets';
import { Gap } from '../../components';
import {ContentKeranjang, EmptyOrder, Headers, ItemValue, ItemValueCopy, OrderTabSection} from '../../components/molecules';
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
              <View style={styles.transfer}>
                <Ic_bank_account />
                <Text style={styles.textBank}>Informasi Transfer Bank</Text>
              </View>
              <View style={styles.informasiBank}>
                   <ItemValueCopy label="A.N Nabila salsa hasnida (BNI)" value="0984003477" />
                   <ItemValueCopy label="A.N Nabila salsa hasnida(BCA)" value="1330349278" />
                   <ItemValueCopy label="DANA" value="081393211636" />
                   <Gap height={10} />
                   <Text style={styles.textBank}>*Note: Klik nomor pin ATM untuk copy </Text>
              </View>
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
    borderBottomWidth: 0.2,
    borderColor: '#373737'
  },
  pesanan: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: '#373737',
    paddingBottom: 5,
  },
  transfer: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  textBank:{
  fontSize: 14,
  fontFamily:'Nunito-Regular',
  marginLeft: 10,
  },
  informasiBank: {
    paddingTop: 10,
    paddingHorizontal: 13,
  }
});
