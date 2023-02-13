import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
const ShowVideo = ({url, poster}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Watch The Recipe:</Text>
      </View>
      <VideoPlayer
        video={{
          uri: url,
        }}
        videoWidth={1500}
        videoHeight={1000}
        autoplay
        defaultMuted
        thumbnail={{uri: poster}}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ShowVideo;
