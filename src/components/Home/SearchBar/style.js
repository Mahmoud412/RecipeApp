import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text1: {
    margin: 10,
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  subcontainer: {
    flexDirection: 'row',
    backgroundColor: '#efeff2',
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  icon: {
    marginRight: 10,
    color: 'black',
  },
  flatList: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  flatListText: {
    fontSize: 18,
    fontWeight: '400',
    padding: 10,
  },
});

export default styles;
