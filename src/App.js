import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './context/AppContext';
import DrawerNav from './Navigation/DrawerNav';
const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
