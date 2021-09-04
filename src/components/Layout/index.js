import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.layout}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default Layout;
