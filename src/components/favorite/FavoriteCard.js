import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import RecipeGrid from '../RecipeGrid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const FavoriteCard = props => {
  const navigation = useNavigation();
  const recipes = props.recipes;
  console.log(recipes);
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>
      <View style={{marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
          Your Favorite Recipes
        </Text>
      </View>
      <RecipeGrid recipes={recipes} />
    </SafeAreaView>
  );
};

export default FavoriteCard;
