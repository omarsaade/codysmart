import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AboutTheAward from '../Screens/AboutTheAward';
import Nomination from '../Screens/Nomination';
import Competitions from '../Screens/Competitions';
import Winners from '../Screens/Winners';
import EducationalResources from '../Screens/EducationalResources';
import Media from '../Screens/Media';
import ContactUs from '../Screens/ContactUs';
import {rh, rw} from '../Services/Dimension';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          height: rh(0.09),
        },
        drawerLabelStyle: {
          color: 'white',
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: 'green',
          width: '75%',
        },

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              marginLeft: rw(0.2),
              width: rh(0.027),
              height: rh(0.027),
            }}>
            <Image
              source={require('../assets/draw.png')}
              style={{
                width: rh(0.027),
                height: rh(0.027),
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', marginRight: rw(0.07)}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../assets/draw.png')}
                style={{
                  width: rh(0.03),
                  height: rh(0.03),
                  marginRight: rw(0.04),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/draw.png')}
                style={{
                  width: rh(0.03),
                  height: rh(0.03),
                }}
              />
            </TouchableOpacity>
          </View>
        ),
      })}>
      <Drawer.Screen
        name="About The Award"
        component={AboutTheAward}
        options={{
          drawerLabel: 'ABOUT THE AWARD',
          // headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="Nomination"
        component={Nomination}
        options={{
          drawerLabel: 'SUBMIT NOMINATION',
        }}
      />
      <Drawer.Screen
        name="Competitions"
        component={Competitions}
        options={{
          drawerLabel: 'COMPETIONS AND FESTIVALS',
        }}
      />
      <Drawer.Screen
        name="Winners"
        component={Winners}
        options={{
          drawerLabel: 'PRVIOUS WINNERS',
        }}
      />
      <Drawer.Screen
        name="Educational Resources"
        component={EducationalResources}
        options={{
          drawerLabel: 'EDUCATINONAL RESOURCES',
        }}
      />
      <Drawer.Screen
        name="Media"
        component={Media}
        options={{
          drawerLabel: 'MEDIA',
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerLabel: 'CONTACT US',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
