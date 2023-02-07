import {
  View,
  Text,
  TextInput,
  SafeAreaView,
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
            style={styles.flatList}
            data={results}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Text style={styles.flatListText}>{item.display}</Text>
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
