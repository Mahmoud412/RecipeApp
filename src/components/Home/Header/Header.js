import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <AntDesign name="bars" size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <Ionicons color="white" name="notifications-outline" size={35} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
