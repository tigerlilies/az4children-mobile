import React from 'react';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SearchGender = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Card containerStyle={styles.cardContainer}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.label}>
          Select a Boy or Girl
        </Text>
        <Picker>
          <Picker.Item label="Any" value="0" />
          <Picker.Item label="Boy" value="m" />
          <Picker.Item label="Girl" value="f" />
        </Picker>
        <Button
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
          onPress={() => navigate('SearchAge')}
          title='NEXT' />
      </Card>
    </ScrollView>
  );
}

export default SearchGender;

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
