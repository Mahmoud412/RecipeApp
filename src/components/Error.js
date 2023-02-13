import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Error = params => {
  const error = params.error;
  return (
    <SafeAreaView>
      <LottieView
        source={require('../assets/Animation/98488-bot-error-404.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <View>{error}</View>
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
export default Error;
