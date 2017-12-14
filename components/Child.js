import React from 'react';
import { StyleSheet, ScrollView, View, Text, Alert } from 'react-native';
import { Button, Card, ListItem, Avatar } from 'react-native-elements';
import config from '../config/config';

const { IMG_URL } = config;

const Child = (props) => {
  let { navigate } = props.navigation;
  let {
    id,
    age,
    gender,
    summary,
    need1,
    need2,
    need3,
    characteristic1,
    characteristic2,
    characteristic3 } = props.navigation.state.params;
  let intro = '';
  let avatar_url = '';
  if (gender === 'M') {
    intro = 'Boy';
    avatar_url = `${IMG_URL}/images/boy.png`;
  } else {
    intro = 'Girl';
    avatar_url = `${IMG_URL}/images/girl.png`;
  }
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Avatar
          large
          rounded
          source={{uri:avatar_url}}
          activeOpacity={0.7}
        />
      </View>
      <View style={[styles.headerContainer, styles.highlight]}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>{`${intro} - Age: ${age}`}</Text>
        <Text style={{color: '#fff'}}>{summary}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Characteristics:</Text>
        <Text>{characteristic1}</Text>
        <Text>{characteristic2}</Text>
        <Text>{characteristic3}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Needs:</Text>
        <Text>{need1}</Text>
        <Text>{need2}</Text>
        <Text>{need3}</Text>
      </View>
      <Button
        backgroundColor='#523F78'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 20, marginBottom: 100}}
        title='SELECT'
        onPress={() => navigate('Confirm', props.navigation.state.params)}
      />
    </ScrollView>
  )
}

export default Child;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  highlight: {
    backgroundColor: '#FF8333'
  },
  avatar: {
    width: 115,
    marginLeft: 20
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#36343A'
  },
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
