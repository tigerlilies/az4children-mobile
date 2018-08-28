/**
 * Arizonan for Children
 * Tiger Lilies for Nonprofits
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

import { Root } from './config/router';
import { fetchUnassigned, reset } from './actions/profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUnassigned();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { loading } = this.props.profiles;
    return loading ? 
      <View style={styles.spinnerStyle}><ActivityIndicator size='large' /></View> : 
      <Root />;
  }

}

function mapStateToProps(state, props) {
  return {
    profiles: state.profiles
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default connect(mapStateToProps, { fetchUnassigned, reset })(App);
