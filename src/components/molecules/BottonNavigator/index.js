import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Ic_akun_off,
  Ic_akun_on,
  Ic_home_off,
  Ic_home_on,
  Ic_keranjang_off,
  Ic_keranjang_on,
  Ic_messages_off,
  Ic_messages_on,
  Ic_scan_off,
  Ic_scan_on,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <Ic_home_on /> : <Ic_home_off />;
    case 'Keranjang':
      return focus ? <Ic_keranjang_on /> : <Ic_keranjang_off />;
    case 'Scan':
      return focus ? <Ic_scan_on /> : <Ic_scan_off />;
    case 'Akun':
      return focus ? <Ic_akun_on /> : <Ic_akun_off />;
    case 'Messages':
      return focus ? <Ic_messages_on /> : <Ic_messages_off />
  }
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.nav}>
              <Icon style={styles.icon} label={label} focus={isFocused} />
              <Text style={styles.label}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
  },
  nav: {
    alignItems: 'center',
  },
});
