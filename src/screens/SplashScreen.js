import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, margin: 0, alignItems: 'center'}}>
      <LottieView
        source={require('../assets/Animation/72260-smile-face-splash-screen.json')}
        autoPlay
        loop={false}
        resizeMode="center"
        style={styles.lottie}
        onAnimationFinish={true}
      />
    </View>
  );
};

export default SplashScreen;
