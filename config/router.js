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
import Activity from '../components/Activity';
import About from '../components/About';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home
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
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      tabBarLabel: 'Activity',
      tabBarIcon: ({ tintColor }) => <Icon name="lightbulb-outline" size={35} color={tintColor} />
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => <Icon name="info-outline" size={35} color={tintColor} />
    },
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
