import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginLeft: 10}}>
          <AntDesign name="bars" size={35} />
        </View>

        <View
          style={{
            backgroundColor: '#fc5050',
            borderRadius: 10,
            marginRight: 10,
          }}>
          <Ionicons color="white" name="notifications-outline" size={35} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
