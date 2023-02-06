import {View, Text} from 'react-native';
import React from 'react';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import Header from '../../components/Home/Header/Header';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#e8e8ed', flex: 1}}>
      <Header />
      <SearchBar />
    </View>
  );
};

export default HomeScreen;
