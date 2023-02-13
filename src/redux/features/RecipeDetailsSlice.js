import {createSlice} from '@reduxjs/toolkit';
import {baseUrl, options} from '../../service/Api';
export const recipesDetailsSlice = createSlice({
  name: 'recipesDetails',
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
  recipesDetailsSlice.actions;

export const fetchRecipeDetails = id => async dispatch => {
  console.log(`id in the slice${id}`);
  try {
    dispatch(fetchRecipesStart());
    const response = await fetch(
      `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,
      options,
    );
    const recipes = await response.json();
    dispatch(fetchRecipesSuccess(recipes));
  } catch (error) {
    dispatch(fetchRecipesFailure(error.message));
  }
};

export default recipesDetailsSlice.reducer;
