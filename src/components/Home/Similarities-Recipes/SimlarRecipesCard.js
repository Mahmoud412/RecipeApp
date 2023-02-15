import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSimlarRecipes} from '../../../redux/store';
const SimlarRecipesCard = props => {
  const name = props.name;
  const id = props.id;
  const dispatch = useDispatch();
  console.log(name, id);

  const {recipes, loading, error} = useSelector(state => state.simlarrecipes);
  useEffect(() => {
    dispatch(fetchSimlarRecipes(id));
  }, []);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default SimlarRecipesCard;
