import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Lists from '../screens/Lists';
import Gallery from '../screens/Gallery';
import Medium from '../screens/Medium';
import Simple from '../screens/Simple';
import Complex from '../screens/Complex';

const SideBar = () => {
  return (
    <Drawer.Navigator initialRouteName="Lists">
      <Drawer.Screen name="Lists" component={Lists} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      <Drawer.Screen name="Medium" component={Medium} />
      <Drawer.Screen name="Simple" component={Simple} />
      <Drawer.Screen name="Complex" component={Complex} />
    </Drawer.Navigator>
  );
};

export default SideBar;
