import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSimlarRecipes} from '../../../redux/store';
import styles from '../RecipeCard/style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Loading from '../../Loading';
import Error from '../../Error';
import RecipeGrid from '../../RecipeGrid';
const SimlarRecipesCard = props => {
  const navigation = useNavigation();
  const name = props.name;
  const id = props.id;
  const dispatch = useDispatch();

  const {recipes, loading, error} = useSelector(state => state.simlarrecipes);
  useEffect(() => {
    dispatch(fetchSimlarRecipes(id));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Error error={error} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={30} />
      </TouchableOpacity>
      <Text style={{margin: 10, fontSize: 17, fontWeight: '500'}}>
        Similar Recipes to: {name}
      </Text>

      <View>
        <RecipeGrid recipes={recipes} />
      </View>
    </View>
  );
};

export default SimlarRecipesCard;
