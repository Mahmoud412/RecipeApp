import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {baseUrl, options} from '../../../service/Api';
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async text => {
    setQuery(text);

    const response = await fetch(
      `${baseUrl}/auto-complete?prefix=${text}`,
      options,
    );
    const data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <SafeAreaView>
      <Text style={styles.text1}>Delicious</Text>
      <Text style={styles.text2}>Easy to cook menu</Text>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <AntDesign style={styles.icon} name="search1" size={25} />
          <TextInput
            style={styles.textInput}
            placeholder="Search your perfect recipe"
            value={query}
            onChangeText={text => handleSearch(text)}
          />
        </View>
      </View>
      {query ? (
        <View>
          <FlatList
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
              marginLeft: 10,
              marginBottom: 10,
              marginRight: 10,
            }}
            data={results}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '400', margin: 10}}>
                  {item.display}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default SearchBar;
