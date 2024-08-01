import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import AboutTheAward from '../Screens/AboutTheAward';
import Nomination from '../Screens/Nomination';
import Competitions from '../Screens/Competitions';
import Winners from '../Screens/Winners';
import EducationalResources from '../Screens/EducationalResources';
import Media from '../Screens/Media';
import ContactUs from '../Screens/ContactUs';
import {rh, rw} from '../Services/Dimension';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, onPress}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.drawerItemContainer}>
      <TouchableOpacity onPress={onPress} style={styles.drawerItemLabel}>
        <Text style={styles.drawerItemText}>{label}</Text>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>
);

const CustomDrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      {/* <DrawerContentScrollView {...props}> */}
      {props.state.routes.map((route, index) => (
        <CustomDrawerItem
          key={route.key}
          label={props.descriptors[route.key].options.drawerLabel}
          onPress={() => props.navigation.navigate(route.name)}
        />
      ))}
      {/* </DrawerContentScrollView> */}

      <View style={{backgroundColor: '#025407'}}>
        {/* <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={require('../assets/draw.png')} style={styles.icon} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/draw.png')} style={styles.icon} />
            <Text style={styles.footerText}>
              Chicago, IL 60606 123, New Lenox
            </Text>
          </View>
          <View style={styles.footerItem}>
            <Image source={require('../assets/draw.png')} style={styles.icon} />
            <Text style={styles.footerText}>123-456-7890</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          height: rh(0.09),
        },
        drawerStyle: {
          backgroundColor: 'green',
          width: '80%',
        },
        headerLeft: () => (
          <Image
            source={require('../assets/draw.png')}
            style={{
              marginLeft: rw(0.2),
              width: rh(0.027),
              height: rh(0.027),
            }}
          />
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
          drawerLabel: 'COMPETITIONS & FESTIVALS',
        }}
      />
      <Drawer.Screen
        name="Winners"
        component={Winners}
        options={{
          drawerLabel: 'PREVIOUS WINNERS',
        }}
      />
      <Drawer.Screen
        name="Educational Resources"
        component={EducationalResources}
        options={{
          drawerLabel: 'EDUCATIONAL RESOURCES',
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

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white',
  },
  searchIcon: {
    padding: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  drawerItemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerItemLabel: {
    alignSelf: 'flex-start',
  },
  drawerItemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DrawerNav;
