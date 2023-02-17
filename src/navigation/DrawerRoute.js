import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import dessertScreen from '../screens/Desserts/DessertScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="home" size={25} />,
        }}
      />
      <Drawer.Screen
        name="desserts"
        component={dessertScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <MaterialCommunityIcons name="candy-outline" size={25} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
