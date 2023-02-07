import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  subContainer: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    padding: 10,
  },
  headLine: {
    fontSize: 18,
    fontWeight: '700',
    bottom: 10,
  },
  list: {
    height: '100%',
  },
  image: {
    height: 300,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
