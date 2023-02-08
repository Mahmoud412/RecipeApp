import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {recipesSlice, fetchRecipes} from './features/RecipeSlice';
import {
  recipesDetailsSlice,
  fetchRecipeDetails,
} from './features/RecipeDetailsSlice';
const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    recipesrecipes: recipesDetailsSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});
export default store;
export {fetchRecipes, fetchRecipeDetails};
