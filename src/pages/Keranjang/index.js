import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Headers, OrderTabSection} from '../../components/molecules';
import {getOrders} from '../../redux/action/order';

const Keranjang = () => {
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
            <OrderTabSection />
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
});
