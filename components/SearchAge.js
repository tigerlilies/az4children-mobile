import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';
import * as selectAction from '../actions/selected';

class SearchAge extends Component {
  constructor() {
    super();
    this.state = {
      age: '0'
    }
  }

  searchBtn() {
    const { navigate } = this.props.navigation;
    this.props.selectAction.setAge(this.state.age);
    navigate('SearchLength');
  }

  render() {
    const { navigate } = this.props.navigation;
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
            onPress={() => this.searchBtn()}
            title='NEXT' />
        </Card>
      </ScrollView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    selected: state.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectAction: bindActionCreators(selectAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAge);

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
