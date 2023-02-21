import {View, Text} from 'react-native';
import React from 'react';
import RecipeDetails from '../../components/RecipesDetails/RecipeDetails';
import {useRoute} from '@react-navigation/native';

const RecipeDetailsScreen = () => {
  const route = useRoute();
  const id = route.params.id;
  return (
    <View>
      <RecipeDetails id={id} />
    </View>
  );
};

export default RecipeDetailsScreen;
