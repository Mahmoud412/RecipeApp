import {createSlice} from '@reduxjs/toolkit';
import {baseUrl, options} from '../../service/DessertsApi';
export const dessertsSlice = createSlice({
  name: 'desserts',
  initialState: {
    dessert: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDessertStart: state => {
      state.loading = true;
    },
    fetchDessertSuccess: (state, action) => {
      state.dessert = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDessertFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchDessertStart, fetchDessertSuccess, fetchDessertFailure} =
  dessertsSlice.actions;

export const fetchDessert = () => async dispatch => {
  try {
    dispatch(fetchDessertStart());
    const response = await fetch(`${baseUrl}/desserts`, options);
    const dessert = await response.json();
    dispatch(fetchDessertSuccess(dessert));
    console.log(dessert);
  } catch (error) {
    dispatch(fetchDessertFailure(error.message));
  }
};

export default dessertsSlice.reducer;
