import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <AntDesign name="bars" size={35} />
        </View>

        <View style={styles.subContainer}>
          <Ionicons color="white" name="notifications-outline" size={35} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
