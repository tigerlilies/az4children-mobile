import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store';
import App from './App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

const StoreInstance = Store();

const Main = () => (
  <Provider store={StoreInstance}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('mentorme', () => Main);
