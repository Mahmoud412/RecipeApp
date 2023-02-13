import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const SimilaritiesRecipesScreen = () => {
  const route = useRoute();
  const {name, id} = route.params;
  console.log(name, id);
  return (
    <SafeAreaView>
      <Text>Similar Recipes to: {name}</Text>
    </SafeAreaView>
  );
};

export default SimilaritiesRecipesScreen;
