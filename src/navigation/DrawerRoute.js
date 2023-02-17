import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import dessertScreen from '../screens/Desserts/DessertScreen';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="desserts"
        component={dessertScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
