import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './Navigation/StackNav';
import {AppProvider} from './context/AppContext';
import {rw, rh} from './Services/Dimension';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <NavigationContainer>
          <StackNav />
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
