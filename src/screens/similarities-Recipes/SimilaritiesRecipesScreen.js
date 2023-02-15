import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import SimlarRecipesCard from '../../components/Home/Similarities-Recipes/SimlarRecipesCard';
const SimilaritiesRecipesScreen = () => {
  const route = useRoute();
  const {name, id} = route.params;
  return (
    <SafeAreaView>
      <SimlarRecipesCard name={name} id={id} />
    </SafeAreaView>
  );
};

export default SimilaritiesRecipesScreen;
