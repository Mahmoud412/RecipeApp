import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const Nutrition = ({fat, protein, sugar, fiber, carbohydrates, calories}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Nutrition</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          margin: 4,
        }}>
        <Text style={styles.nutritionText}>Fat: {fat} </Text>
        <Text style={styles.nutritionText}>Protein: {protein}</Text>
        <Text style={styles.nutritionText}>Sugar: {sugar}</Text>
        <Text style={styles.nutritionText}>Fiber: {fiber}</Text>
        <Text style={styles.nutritionText}>Carbohydrates: {carbohydrates}</Text>
        <Text style={styles.nutritionText}>Calories: {calories}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  nutritionText: {
    marginHorizontal: 5,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
export default Nutrition;
