import {API_KEY} from '@env';
export const baseUrl = 'https://tasty.p.rapidapi.com/recipes';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};
