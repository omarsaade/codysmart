import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AppContext} from '../context/AppContext';
import {rh, rw} from '../Services/Dimension';

const HomeScreen = ({navigation}) => {
  const {state, setUser} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page</Text>
      <Text>
        Current user: {state.user ? state.user.name : 'Not logged in'}
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title={state.user ? 'Logout' : 'Login'}
        onPress={() => setUser(state.user ? null : {name: 'John Doe'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
