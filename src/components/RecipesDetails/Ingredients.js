import {View, Text, Image} from 'react-native';
import React from 'react';

const ingredients = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/1255254449/vector/salt-in-a-shaker-with-metal-cap-and-in-a-bowl.jpg?s=612x612&w=0&k=20&c=9PsCeSpWHsE25NyNZ6lCgDsL7u5AmZGjCOvpKpW_eUY=',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/959114748/vector/vector-black-pepper-illustration-isolated-in-cartoon-style-herbs-and-species-series.jpg?s=612x612&w=0&k=20&c=gDp79CgEvy0owEBPofPo81GjjtDs1he90M5MRoLkyRM=',
  },
  {
    id: 3,
    url: 'https://img.freepik.com/free-vector/red-chilli-peppers-cartoon-art-illustration_56104-844.jpg',
  },
  {
    id: 4,
    url: 'https://media.istockphoto.com/id/1365938897/vector/illustration-of-vegetable-zucchini-ingredients.jpg?s=612x612&w=0&k=20&c=F7zKxWrvcnZrmiuj6mcvTnKa2-p1NR5mgH-oTTM-tY0=',
  },
];

const Ingredients = () => {
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
        Ingredients
      </Text>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {ingredients.map(pic => (
          <Image
            key={pic.id}
            style={{height: 100, width: 95, borderRadius: 10}}
            source={{uri: pic.url}}
          />
        ))}
      </View>
    </View>
  );
};

export default Ingredients;
