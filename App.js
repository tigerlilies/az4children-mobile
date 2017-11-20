/**
 * Arizonan for Children
 * Tiger Lilies for Nonprofits
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
// import { Provider } from 'react-redux';
// import Store from './store';

import Home from './components/Home';
import ChildList from './components/ChildList';
import Child from './components/Child';
import SearchGender from './components/SearchGender';
import SearchAge from './components/SearchAge';
import SearchLength from './components/SearchLength';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    })
  },
  ChildList: {
    screen: ChildList,
    navigationOptions: ({navigation}) => ({
      title: 'Children',
    })
  },
  Child: {
    screen: Child,
    navigationOptions: ({navigation}) => ({
      title: 'Child Info',
    })
  },
  SearchGender: {
    screen: SearchGender,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
    })
  },
  SearchAge: {
    screen: SearchAge,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
    })
  },
  SearchLength: {
    screen: SearchLength,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
    })
  }
});

class App extends Component {
  // const StoreInstance = Store();
  render() {
    return (
      <RootNavigator />
    );
  }
}

export default App;
