import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

const Catagory = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryContainer,
              {
                backgroundColor:
                  selectedCategory === category ? '#fc5050' : '#ffff',
              },
            ]}
            onPress={() => setSelectedCategory(category)}>
            <View>
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: category === selectedCategory ? 'white' : 'black',
                  },
                ]}>
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Catagory;
