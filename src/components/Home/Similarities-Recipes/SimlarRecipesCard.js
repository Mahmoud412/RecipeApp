import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSimlarRecipes} from '../../../redux/store';
import styles from '../RecipeCard/style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Loading from '../../Loading';
import Error from '../../Error';
const SimlarRecipesCard = props => {
  const navigation = useNavigation();
  const name = props.name;
  const id = props.id;
  const dispatch = useDispatch();
  console.log(name, id);

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
        {' '}
        Similar Recipes to: {name}
      </Text>

      <View>
        <FlatList
          data={recipes}
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
            </View>
          )}
          style={styles.list}
        />
      </View>
    </View>
  );
};

export default SimlarRecipesCard;
