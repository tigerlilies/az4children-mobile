import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store';
import App from './App';

const StoreInstance = Store();

const Main = () => (
  <Provider store={StoreInstance}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('mobile', () => Main);
