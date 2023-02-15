import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {recipesSlice, fetchRecipes} from './features/RecipeSlice';
import {
  recipesDetailsSlice,
  fetchRecipeDetails,
} from './features/RecipeDetailsSlice';
import {
  simlarRecipesSlice,
  fetchSimlarRecipes,
} from './features/SimilarRecipesSlice';
const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    recipesrecipes: recipesDetailsSlice.reducer,
    simlarrecipes: simlarRecipesSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
export default store;
export {fetchRecipes, fetchRecipeDetails, fetchSimlarRecipes};
