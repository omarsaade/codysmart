import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {rw, rh} from '../Services/Dimension';
import Contact from '../Screens/Contact';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contact" component={Contact} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
