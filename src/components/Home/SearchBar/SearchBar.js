import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

const SearchBar = () => {
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
