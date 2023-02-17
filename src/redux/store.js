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
import {dessertsSlice, fetchDessert} from './features/DessertsSlice';
import {FavoriteRecipeSlice} from './features/FavoriteRecipeSlice';
const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    recipesrecipes: recipesDetailsSlice.reducer,
    simlarrecipes: simlarRecipesSlice.reducer,
    desserts: dessertsSlice.reducer,
    favorit: FavoriteRecipeSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
export default store;
export {fetchRecipes, fetchRecipeDetails, fetchSimlarRecipes, fetchDessert};
