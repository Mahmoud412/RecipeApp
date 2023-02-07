import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRecipes} from '../../.././redux/store';

const RecipesCard = () => {
  const dispatch = useDispatch();
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
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
};

export default RecipesCard;
