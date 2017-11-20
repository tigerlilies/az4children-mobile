import React from 'react';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SearchLength = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Card containerStyle={styles.cardContainer}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.label}>
          Number of Waiting Days
        </Text>
        <Picker>
          <Picker.Item label="Any" value="0" />
          <Picker.Item label="Less than 30 days" value="1" />
          <Picker.Item label="Between 30 - 60 days" value="2" />
          <Picker.Item label="Between 60 - 120 days" value="3" />
          <Picker.Item label="Greater than 120 days" value="4" />
        </Picker>
        <Button
          icon={{name: 'search'}}
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
          onPress={() => navigate('Home')}
          title='SEARCH' />
      </Card>
    </ScrollView>
  );
}

export default SearchLength;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10
  },
  logo: {
    marginTop: 80,
    marginLeft: 50,
    marginBottom: 20,
    width: 200
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    color: "#726F6F",
    marginTop: 10
  }
});
