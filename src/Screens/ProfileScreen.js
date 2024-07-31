import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppContext} from '../AppContext';
import {rh, rw} from '../Services/Dimension';

const ProfileScreen = () => {
  const {state} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      {state.user ? (
        <View>
          <Text>Name: {state.user.name}</Text>
          <Text>Theme: {state.theme}</Text>
        </View>
      ) : (
        <Text>Please log in to view your profile</Text>
      )}
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
    fontSize: rh(0.01),
    marginBottom: rw(0.02),
  },
});

export default ProfileScreen;
