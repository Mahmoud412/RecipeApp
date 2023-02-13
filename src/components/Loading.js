import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <SafeAreaView>
      <LottieView
        source={require('../assets/Animation/99318-hms-loading.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  lottie: {
    width: '80%',
    height: 200,
    marginVertical: 30,
    alignSelf: 'center',
  },
});
export default Loading;
