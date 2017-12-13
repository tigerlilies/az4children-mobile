/**
 * Arizonan for Children
 * Tiger Lilies for Nonprofits
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';

import Store from './store';
import Home from './components/Home';
import ChildList from './components/ChildList';
import Child from './components/Child';
import SearchGender from './components/SearchGender';
import SearchAge from './components/SearchAge';
import SearchLength from './components/SearchLength';
import Confirm from './components/Confirm';

import * as profileAction from './actions/profile';

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
  },
  Confirm: {
    screen: Confirm,
    navigationOptions: ({navigation}) => ({title: 'Confirm'})
  }
});

class App extends Component {
  componentDidMount() {
    // this.props.profileAction.fetchProfiles();
    this.props.profileAction.fetchUnassigned();
  }

  render() {
    return (
      <RootNavigator />
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    profileAction: bindActionCreators(profileAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
