import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import SideBar from '../navigation/drawer';

function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <SideBar />
      </NavigationContainer>
    </>
  );
}

export default App;
