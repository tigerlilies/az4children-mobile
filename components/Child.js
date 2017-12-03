import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';
import config from '../config';

const IMG_URL = config.IMG_URL;

const sendMail = () => {
  console.log('send mail');
}

const Child = (props) => {
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
      <Card
        title={`${intro} - Age: ${age}`}
        image={{uri:avatar_url}}
        imageStyle={styles.avatar}
        containerStyle={{ borderRadius: 5 }}>
      </Card>
      <View style={[styles.container, styles.highlight]}>
        <Text>{summary}</Text>
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
        icon={{name: 'email'}}
        backgroundColor='#523F78'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 20, marginBottom: 100}}
        title='SUBMIT'
        onPress={() => sendMail()}
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
    backgroundColor: '#E7A522'
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
});
