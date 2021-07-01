import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {Fitur, Gap, Kategori, SearchInput} from '../../components/atoms';
import {HomeTabSection, WelcomeUser} from '../../components/molecules';

const Home = ({onPress, navigation}) => {
  return (
    <View style={styles.pages}>
      <View style={styles.nav}>
        <View style={styles.header}>
          <WelcomeUser />
        </View>
      </View>
      <Gap height={10} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.text}>Mau belanja apa</Text>
        <Text style={styles.text}>hari ini ?</Text>
        <Gap height={30} />

        <View style={styles.page}>
          <Text style={styles.textFitur}>Fitur Kami</Text>
          <Gap height={12} />
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Lelang Barang" />
            </View>
            <View style={styles.content}>
              <Fitur label="Pembelian" />
            </View>
          </View>
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Tukar Barang" />
            </View>
            <View style={styles.content}>
              <Fitur label="Tentang Kami" />
            </View>
          </View>
          <Gap height={10} />
          <Text style={styles.textFitur}>Pilih Kategori</Text>
          <Gap height={12} />
          <View style={styles.kategori}>
            <View style={styles.kategoriItem}>
              <Kategori label="PAKAIAN" />
            </View>
            <View style={styles.kategoriItem}>
              <Kategori label="HEELS" />
            </View>
            <View style={styles.kategoriItem}>
              <Kategori label="HIJAB" />
            </View>
            <View style={styles.kategoriItem}>
              <Kategori label="TAS" />
            </View>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
  },
  page: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
  },
  pages: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    paddingHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 10,
  },
  textFitur: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  fitur: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 9,
  },
  kategori: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  kategoriItem: {
    flex: 1,
    paddingRight: 5,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
});
