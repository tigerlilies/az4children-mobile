import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
import config from '../config';

const IMG_URL = config.IMG_URL;

const ChildList = (props) => {
  const { navigate } = props.navigation
  let { gender } = props.navigation.state.params;
  let avatar_url = '';
  let intro = '';
  let children = [];
  if (gender === 'M') {
    intro = 'Boy';
    children = props.boys
    avatar_url = `${IMG_URL}/images/boy.png`;
  } else {
    intro = 'Girl';
    children = props.girls
    avatar_url = `${IMG_URL}/images/girl.png`;
  }
  return (
    <ScrollView>
      <Card
        image={{uri:avatar_url}}
        imageStyle={styles.avatar}
        containerStyle={{ borderRadius: 5 }}>
      {children.map((child, i) => {
        return (
          <ListItem
            key={i}
            title={`${intro} - Age: ${child.age}`}
            subtitle={child.summary}
            hideChevron={true}
            onPress={() => navigate("Child", child)}
          />
        );
      })}
    </Card>
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

const styles = StyleSheet.create({
  avatar: {
    width: 115,
    marginLeft: 20
  }
});
