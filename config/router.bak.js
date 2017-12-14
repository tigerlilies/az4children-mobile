import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../components/Home';
import ChildList from '../components/ChildList';
import Child from '../components/Child';
import SearchGender from '../components/SearchGender';
import SearchAge from '../components/SearchAge';
import SearchLength from '../components/SearchLength';
import Confirm from '../components/Confirm';

export const Root = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    })
  },
  ChildList: {
    screen: ChildList,
    navigationOptions: ({navigation}) => ({
      title: 'List',
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

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  SearchGender: {
    screen: SearchGender,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});
