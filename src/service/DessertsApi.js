import {API_KEY1} from '@env';
export const baseUrl = 'https://pizza-and-desserts.p.rapidapi.com';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY1,
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  },
};
