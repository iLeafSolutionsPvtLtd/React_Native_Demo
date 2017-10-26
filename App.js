/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ModalView from './App/containers/ModalView';

import {autoRehydrate, persistStore} from 'redux-persist';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import AppReducer from './App/redux';

const loggerMiddleware = createLogger({predicate:(getstate,actions) => __DEV__});

function configureStore(initialState){
   const enhancer = compose(
     applyMiddleware(
       loggerMiddleware,
       thunkMiddleware,
    ),
   );
 }

const store = createStore(AppReducer,{},compose(autoRehydrate()))

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component<{}> {

  constructor(){
    super();
    persistStore(store,{storage: AsyncStorage,blacklist: ['Navigation']});
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ModalView/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
