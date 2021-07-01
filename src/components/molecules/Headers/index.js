import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ic_arrow_back} from '../../../assets';

const Headers = ({title, subTitle, onBack, onPress}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
          <View style={styles.icon}>
            <Ic_arrow_back />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 3,
    marginRight: 25,
  },
});
