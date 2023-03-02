import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [],
};

export const FavoriteRecipeSlice = createSlice({
  name: 'favorit',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const isFav = state.items.find(item => item.id === action.payload.id);
      if (!isFav) {
        state.items.push({...action.payload});
      }
    },
    removeFromFavorites: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `cant remove movie ${action.payload.id} as its not in Fevorites`,
        );
      }
    },
  },
});

export const {addToFavorites, removeFromFavorites} =
  FavoriteRecipeSlice.actions;

export const selectFavoritRecipe = state => state.favorit.items;
export const selectFavoritRecipeWithId = (state, id) =>
  state.favorit.items.find(item => item.id === id);

export const isFavRecipeSelector = (state, id) =>
  state.favorit.items.find(m => m.id === id) != undefined;

export default FavoriteRecipeSlice.reducer;
