import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
// import { Tabs } from '../config/router';

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

  return today;
}

const ChildList = (props) => {
  const navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  const { navigate } = props.navigation;
  let { age, gender, length } = props.navigation.state.params;
  let headingText = '';
  if (gender === 'M') {
    headingText = 'Boy';
  } else if (gender === 'F') {
    headingText = 'Girl';
  } else {
    headingText = 'Child Profiles';
  }

  let children = props.profiles;
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
      <View style={styles.headerContainer}>
        <Icon color="white" name="face" size={62} />
        <Text style={styles.heading}>{headingText}</Text>
      </View>
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
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#523F78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  }
});