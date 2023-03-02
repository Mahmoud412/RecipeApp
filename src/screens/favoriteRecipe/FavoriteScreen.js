import {View, Text} from 'react-native';
import React from 'react';
import FavoriteCard from '../../components/favorite/FavoriteCard';
import {useSelector} from 'react-redux';
import {selectFavoritRecipe} from '../../redux/features/FavoriteRecipeSlice';
const FavoriteScreen = () => {
  const recipes = useSelector(state => selectFavoritRecipe(state));
  return (
    <View>
      <FavoriteCard recipes={recipes} />
    </View>
  );
};

export default FavoriteScreen;
