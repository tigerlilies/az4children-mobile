import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';

class SearchAge extends Component {
  constructor() {
    super();
    this.state = {
      age: '0'
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    let { gender } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Card containerStyle={styles.cardContainer}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.label}>
            Select Age Range
          </Text>
          <Picker
            selectedValue={this.state.age}
            onValueChange={(a) => this.setState({age: a})}>
            <Picker.Item label="Any" value="0" />
            <Picker.Item label="5 - 8 years" value="1" />
            <Picker.Item label="9 - 11 years" value="2" />
            <Picker.Item label="12 - 15 years" value="3" />
            <Picker.Item label="15 - 18 years" value="4" />
          </Picker>
          <Button
            backgroundColor='#523F78'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
            onPress={() => navigate('SearchLength', {
              gender,
              age: this.state.age
            })}
            title='NEXT' />
        </Card>
      </ScrollView>
    );
  }
}

export default SearchAge;

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
