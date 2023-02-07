import {View, Text} from 'react-native';
import React from 'react';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import Header from '../../components/Home/Header/Header';
import Catagory from '../../components/Home/Catagory/Catagory';
import RecipesCard from '../../components/Home/RecipeCard/RecipesCard';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#e8e8ed', flex: 1}}>
      <Header />
      <SearchBar />
      <Catagory />
      <RecipesCard />
    </View>
  );
};

export default HomeScreen;
