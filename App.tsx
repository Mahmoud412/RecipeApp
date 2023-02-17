import React from 'react';
import {Provider} from 'react-redux'
import store from './src/redux/store';
import Router from './src/navigation/Router';
import 'react-native-gesture-handler'

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
   </Provider>
  );
};
export default App;