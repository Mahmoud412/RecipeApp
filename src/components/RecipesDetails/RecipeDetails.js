import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

const RecipeDetails = () => {
  const route = useRoute();
  const id = route.params;
  console.log(id);
  return (
    <SafeAreaView>
      <Text>RecipeDetails</Text>
    </SafeAreaView>
  );
};

export default RecipeDetails;
