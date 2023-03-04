import React, { useEffect } from 'react';
import {Provider} from 'react-redux'
import store from './src/redux/store';
import Router from './src/navigation/Router';
import 'react-native-gesture-handler'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
import Loading from './src/components/Loading';
import SplashScreen from 'react-native-splash-screen'

 let persistor = persistStore(store)

const App = () => {
  useEffect(() =>{
    SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
      <Router/>
      </PersistGate>
   </Provider>
  );
};
export default App;