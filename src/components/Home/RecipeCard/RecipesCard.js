import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRecipes} from '../../.././redux/store';
import {useNavigation} from '@react-navigation/native';

const RecipesCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {recipes, loading, error} = useSelector(state => state.recipes);
  useEffect(() => {
    dispatch(fetchRecipes());
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
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Popular</Text>

      <View>
        <FlatList
          data={recipes}
          onEndReached={fetchRecipes}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={styles.subContainer}
                onPress={() => navigation.navigate('RecipeDetails', item.id)}>
                <Image
                  style={styles.image}
                  source={{uri: item.thumbnail_url}}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.yields}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.seeMoreTextContainer}>
                <Text style={styles.seeMoreText}>See similar reiceps </Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.list}
        />
      </View>
    </View>
  );
};

export default RecipesCard;
