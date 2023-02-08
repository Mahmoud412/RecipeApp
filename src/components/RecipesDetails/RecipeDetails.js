import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRecipeDetails} from '../.././redux/store';
import {options} from '../../service/Api';
const RecipeDetails = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const id = route.params;
  const {recipes, loading, error} = useSelector(state => state.recipesrecipes);
  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <SafeAreaView>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>{recipes.approved_at}</Text>
    </SafeAreaView>
  );
};

export default RecipeDetails;
