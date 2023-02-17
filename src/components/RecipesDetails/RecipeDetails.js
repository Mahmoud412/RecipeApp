import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRecipeDetails} from '../.././redux/store';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ingredients from './Ingredients';
import Loading from '../Loading';
import Error from '../Error';
import styles from './Style';
import Nutrition from './Nutrition';
import ShowVideo from './ShowVideo';
const RecipeDetails = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const id = props.id;
  const {recipes, loading, error} = useSelector(state => state.recipesrecipes);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch]);

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={{height: '100%', width: '100%'}}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} />
          </TouchableOpacity>
          <MaterialIcons name="favorite-border" size={30} color="#e8b2b3" />
        </View>
        <View style={styles.subContainer}>
          <Image style={styles.image} source={{uri: recipes.thumbnail_url}} />
        </View>
        <View style={styles.RecipeNameView}>
          <Text style={styles.recipeName}>{recipes.name}</Text>
          <View style={styles.iconView}>
            <Ionicons name="timer-outline" size={20} color="#e8b2b3" />
            <Text style={styles.recipeMin}>
              {recipes.cook_time_minutes} min
            </Text>
          </View>
        </View>
        <Ingredients />
        <View style={{height: '100%'}}>
          <View style={{margin: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.description}>Description</Text>
            </View>
            <Text style={styles.descriptionText}>{recipes.description}</Text>
          </View>
          <View style={{margin: 10}}>
            <Text style={styles.description}>Instructions</Text>
            {recipes.instructions.map((e, index) => (
              <Text key={index} style={styles.descriptionText}>
                {e.display_text}
              </Text>
            ))}
          </View>
          <Nutrition
            fat={recipes.nutrition.fat}
            protein={recipes.nutrition.protein}
            sugar={recipes.nutrition.sugar}
            fiber={recipes.nutrition.fiber}
            carbohydrates={recipes.nutrition.carbohydrates}
            calories={recipes.nutrition.calories}
          />
          <ShowVideo
            url={recipes.original_video_url}
            poster={recipes.thumbnail_url}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
