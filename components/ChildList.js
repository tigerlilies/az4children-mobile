import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
import config from '../config';

const IMG_URL = config.IMG_URL;

const getTodayDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + '/' + mm + '/' + dd;

  console.log('in getTodayDate >>> today:', today);
  return today;
}

const ChildList = (props) => {

  console.log('in ChildList >>> props', props);
  const { navigate } = props.navigation;
  let { age, gender, length } = props.navigation.state.params;
  console.log('in ChildList >>> age:', age);
  console.log('in ChildList >>> gender:', gender);
  console.log('in ChildList >>> length:', length);
  let avatar_url = '';

  if (gender === 'M') {
    avatar_url = `${IMG_URL}/images/boy.png`;
  } else if (gender === 'F') {
    avatar_url = `${IMG_URL}/images/girl.png`;
  } else {
    avatar_url = `${IMG_URL}/images/girl.png`;
  }

  let children = props.profiles;
  console.log('in ChildList >>> children:init', children);
  if (gender !== '0') {
    children = props.profiles.filter(profile => profile.gender === gender);
  }

  /******************
   Age mapping:
    0: Any
    1: 5 - 8 years
    2: 9 - 11 years
    3: 12 - 15 years
    4: 15 - 18 years
  ******************/
  console.log('in ChildList >>> children:bygender', children);
  if (age !== undefined) {
    children = children.filter(child => {
      switch (age) {
        case '1':
          return (child.age > 4 && child.age < 9)
        case '2':
          return (child.age > 8 && child.age < 12)
        case '3':
          return (child.age > 11 && child.age < 16)
        case '4':
          return (child.age > 14 && child.age < 19)
        default:
          return child;
      }
    });
  }

  /******************
   Length mapping:
    0: Any
    1: Less than 30 days
    2: Between 30 - 60 days
    3: Between 60 - 120 days
    4: Greater than 120 days
  ******************/
  console.log('in ChildList >>> children:byage', children);
  if (length != undefined) {
    let today = getTodayDate();
    let date2 = new Date(today);
    children = children.filter(child => {
      let date1 = new Date(child.created_at);
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      switch (length) {
        case '1':
          return dayDiff < 30;
        case '2':
          return (dayDiff >= 30 && dayDiff < 60);
        case '3':
          return (dayDiff >= 60 && dayDiff < 120);
        case '4':
          return dayDiff > 120;
        default:
          return child;
      }
    });
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
            title={child.gender === 'M' ? `Boy - Age: ${child.age}` : `Girl - Age: ${child.age}`}
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
  return {
    profiles: state.profiles
  }
}

export default connect(mapStateToProps, null)(ChildList);

const styles = StyleSheet.create({
  avatar: {
    width: 115,
    marginLeft: 20
  }
});
