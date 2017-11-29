import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const ChildList = (props) => {
  let { gender } = props.navigation.state.params;
  let children = [];
  if (gender === 'M') {
    children = props.boys
  } else {
    children = props.girls
  }
  return (
    <ScrollView>
      {children.map((child, i) => {
        return (
          <Card key={i}>
            <Text>{child.summary}</Text>
          </Card>
        );
      })}
    </ScrollView>
  )
}

function mapStateToProps(state, props) {
  let boys = [];
  let girls = [];
  if (state.profiles) {
    boys = state.profiles.filter(profile => profile.gender === 'M');
    girls = state.profiles.filter(profile => profile.gender === 'F');
  }
  return {
    profiles: state.profiles,
    boys,
    girls
  }
}

export default connect(mapStateToProps, null)(ChildList);
