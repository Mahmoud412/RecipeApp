import React from 'react';
import HomeScreen from './src/screens/Home/HomeScreen';
import {Provider} from 'react-redux'
import store from './src/redux/store';
import Router from './src/navigation/Router';


const App = () => {
  return (
    <Provider store={store}>
      <Router/>
   </Provider>
  );
};
export default App;