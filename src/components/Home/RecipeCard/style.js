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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeMoreText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seeMoreTextContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 10,
  },
  ErrorText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default styles;
