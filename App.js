import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import TabBar from './navigation/tabs';
import RNBootSplash from 'react-native-bootsplash';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';
function App() {
  RNBootSplash.hide({fade: true}); // fade
  return (
    <>
      <NavigationContainer>
        {Platform.OS === 'ios' ? (
          <View style={styles.iphonebar} />
        ) : (
          <StatusBar backgroundColor="skyblue" />
        )}
        <TabBar />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  iphonebar: {backgroundColor: 'skyblue', height: 40, width: 400},
});

export default App;
