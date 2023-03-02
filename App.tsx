import React from 'react';
import {Provider} from 'react-redux'
import store from './src/redux/store';
import Router from './src/navigation/Router';
import 'react-native-gesture-handler'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
 let persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router/>
      </PersistGate>
   </Provider>
  );
};
export default App;