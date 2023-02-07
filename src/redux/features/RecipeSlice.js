import {createSlice} from '@reduxjs/toolkit';
import {baseUrl, options} from '../../service/Api';
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRecipesStart: state => {
      state.loading = true;
    },
    fetchRecipesSuccess: (state, action) => {
      state.recipes = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRecipesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure} =
  recipesSlice.actions;

export const fetchRecipes = () => async dispatch => {
  try {
    dispatch(fetchRecipesStart());
    const response = await fetch(
      `${baseUrl}/list?from=0&size=30&tags=under_30_minutes`,
      options,
    );
    const recipes = await response.json();
    dispatch(fetchRecipesSuccess(recipes.results));
    console.log(recipes.results);
  } catch (error) {
    dispatch(fetchRecipesFailure(error.message));
  }
};

export default recipesSlice.reducer;
