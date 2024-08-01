import React from 'react';
import {Image, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rh, rw} from '../Services/Dimension';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="DrawerNav"
        screenOptions={
          {
            // headerStyle: styles.headerStyle,
            // headerTintColor: 'black',
            // headerBackTitleVisible: false,
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   fontSize: rh(0.022),
            //   fontWeight: '800',
            //   color: 'black',
            // },
          }
        }>
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'green',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: rh(0.025),
    fontWeight: 'bold',
  },
  headerIcon: {
    width: rh(0.034),
    height: rh(0.034),
    marginLeft: rw(0.01),
    backgroundColor: 'green',
  },
});

export default StackNav;
