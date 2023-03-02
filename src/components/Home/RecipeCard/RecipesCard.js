import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRecipes} from '../../.././redux/store';
import {useNavigation} from '@react-navigation/native';
import Loading from '../../Loading';
import Error from '../../Error';
import RecipeGrid from '../../RecipeGrid';
const RecipesCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {recipes, loading, error} = useSelector(state => state.recipes);
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Error />
        <View style={{margin: 10}}>
          <Text style={styles.ErrorText}>{error}!</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Popular</Text>

      <View>
        <RecipeGrid recipes={recipes} />
      </View>
    </View>
  );
};

export default RecipesCard;
