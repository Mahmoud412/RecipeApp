import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetails/RecipeDetailsScreen';
import SimilaritiesRecipesScreen from '../screens/similarities-Recipes/SimilaritiesRecipesScreen';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
