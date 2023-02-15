import {createSlice} from '@reduxjs/toolkit';
import {baseUrl, options} from '../../service/Api';
export const simlarRecipesSlice = createSlice({
  name: 'simlarRecipes',
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
  simlarRecipesSlice.actions;

export const fetchSimlarRecipes = id => async dispatch => {
  console.log(`id in the slice${id}`);
  try {
    dispatch(fetchRecipesStart());
    const response = await fetch(
      `${baseUrl}/list-similarities?recipe_id=${id}`,
      options,
    );
    const recipes = await response.json();
    dispatch(fetchRecipesSuccess(recipes.results));
  } catch (error) {
    dispatch(fetchRecipesFailure(error.message));
  }
};

export default simlarRecipesSlice.reducer;
