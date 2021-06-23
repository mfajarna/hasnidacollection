import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder, Headers, OrderTabSection} from '../../components/molecules';

const NotificationOrder = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Headers
            title="Notifikasi"
            subTitle="Cek pesananmu disini"
            onBack={() => {}}
          />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default NotificationOrder;

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
