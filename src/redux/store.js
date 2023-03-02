import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
const reducers = combineReducers({
  favorit: FavoriteRecipeSlice.reducer,
  recipes: recipesSlice.reducer,
  recipesrecipes: recipesDetailsSlice.reducer,
  simlarrecipes: simlarRecipesSlice.reducer,
  desserts: dessertsSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorit', 'desserts', 'simlarrecipes', 'recipes'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
export default store;
export {fetchRecipes, fetchRecipeDetails, fetchSimlarRecipes, fetchDessert};
