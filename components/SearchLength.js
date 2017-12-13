import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';

class SearchLength extends Component {
  constructor() {
    super();
    this.state = {
      length: '4'
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    let { gender } = this.props.navigation.state.params;
    let { age } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Card containerStyle={styles.cardContainer}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.label}>
            Select Waiting Time
          </Text>
          <Picker
            selectedValue={this.state.length}
            onValueChange={(l) => this.setState({length: l})}>
            <Picker.Item label="Any" value="0" />
            <Picker.Item label="Less than 30 days" value="1" />
            <Picker.Item label="Between 30 - 60 days" value="2" />
            <Picker.Item label="Between 60 - 120 days" value="3" />
            <Picker.Item label="Greater than 120 days" value="4" />

          </Picker>
          <Button
            backgroundColor='#523F78'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
            onPress={() => navigate('ChildList', {
              gender,
              age,
              length: this.state.length
            })}
            title='NEXT' />
        </Card>
      </ScrollView>
    );
  }
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
