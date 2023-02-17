import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetails/RecipeDetailsScreen';
import SimilaritiesRecipesScreen from '../screens/similarities-Recipes/SimilaritiesRecipesScreen';
import DessertScreen from '../screens/Desserts/DessertScreen';
import DrawerRoute from './DrawerRoute';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={DrawerRoute}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SimilaritiesRecipesScreen"
          component={SimilaritiesRecipesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DessertsScreen"
          component={DessertScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
