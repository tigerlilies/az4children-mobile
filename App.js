/**
 * Arizonan for Children
 * Tiger Lilies for Nonprofits
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import Store from './store';
import { Root, Tabs } from './config/router';
import * as profileAction from './actions/profile';

class App extends Component {
  componentDidMount() {
    this.props.profileAction.fetchUnassigned();
  }

  render() {
    return <Root />;
  }

}

function mapDispatchToProps(dispatch) {
  return {
    profileAction: bindActionCreators(profileAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
