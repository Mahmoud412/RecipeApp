import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {recipesSlice, fetchRecipes} from './features/RecipeSlice';
const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});
export default store;
export {fetchRecipes};
