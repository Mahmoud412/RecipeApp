import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  container: {
    backgroundColor: '#e8e8ed',
    height: '100%',
  },
  subContainer: {
    borderRadius: 10,
    margin: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 15,
  },
  RecipeNameView: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  recipeMin: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 5,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '200',
  },
});
export default styles;
