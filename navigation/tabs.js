/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Gallery from '../screens/Gallery';
import Medium from '../screens/Medium';
import Simple from '../screens/Simple';
import Complex from '../screens/Complex';
import {Image} from 'react-native';
import Home from '../src/assets/Images/home.png';
import complex from '../src/assets/Images/complex.png';
import galleryIcon from '../src/assets/Images/gallery.png';
import upload from '../src/assets/Images/upload.png';
import menu from '../src/assets/Images/menu.png';
import DrawerNavigation from '../screens/DrawerNavigation';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Simple"
        component={Simple}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#EF79BC' : '#000',
              }}
              source={Home}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Medium"
        component={Medium}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#EF79BC' : '#000',
                height: 24,
                width: 24,
              }}
              source={upload}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#EF79BC' : '#000',
                height: 24,
                width: 24,
              }}
              source={galleryIcon}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Complex"
        component={Complex}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#EF79BC' : '#000',
                height: 24,
                width: 24,
              }}
              source={complex}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#EF79BC' : '#000',
                height: 24,
                width: 24,
              }}
              source={menu}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabBar;
