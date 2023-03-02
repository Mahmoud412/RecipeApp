import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/Home/RecipeCard/style';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  addToFavorites,
  removeFromFavorites,
  isFavRecipeSelector,
} from '../redux/features/FavoriteRecipeSlice';
import {useSelector, useDispatch} from 'react-redux';
const RecipeGrid = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const recipes = props.recipes;
  const [recipeId, setRecipeId] = useState();
  console.log(recipeId);
  const isFev = useSelector(state => isFavRecipeSelector(state, recipeId));
  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View>
              <View>
                <TouchableOpacity
                  style={styles.subContainer}
                  onPress={() =>
                    navigation.navigate('RecipeDetailsScreen', {id: item.id})
                  }>
                  <Image
                    style={styles.image}
                    source={{uri: item.thumbnail_url}}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.yields}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.seeMoreTextContainer}
              onPress={() =>
                navigation.navigate('SimilaritiesRecipesScreen', {
                  id: item.id,
                  name: item.name,
                })
              }>
              <Text style={styles.seeMoreText}>See similar reiceps </Text>
            </TouchableOpacity>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

export default RecipeGrid;

{
  /* <TouchableOpacity
                  style={{
                    bottom: 100,
                    position: 'absolute',
                    zIndex: 100,
                    right: 10,
                    top: 40,
                    padding: 10,
                  }}
                  onPress={() => {
                    setRecipeId(item.id);
                    const data = {
                      id: item.id,
                      name: item.name,
                      thumbnail_url: item.thumbnail_url,
                      yields: item.yields,
                    };
                    dispatch(
                      isFev ? removeFromFavorites(data) : addToFavorites(data),
                    );
                  }}>
                  <MaterialIcons
                    name={isFev ? 'favorite' : 'favorite-border'}
                    size={40}
                    color="#e8b2b3"
                  />
                </TouchableOpacity> */
}
