import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';
// import * as selectAction from '../actions/selected';

class SearchGender extends Component {
  constructor() {
    super();
    this.state = {
      gender: '0'
    }
  }

  // searchBtn() {
  //   const { navigate } = this.props.navigation;
  //   this.props.selectAction.setGender(this.state.gender);
  //   navigate('SearchAge');
  // }

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
            Select a Boy or Girl
          </Text>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={(g) => this.setState({gender: g})}>
            <Picker.Item label="Any" value="0" />
            <Picker.Item label="Boy" value="M" />
            <Picker.Item label="Girl" value="F" />
          </Picker>
          <Button
            backgroundColor='#523F78'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
            onPress={() => navigate('SearchAge', { gender: this.state.gender })}
            title='NEXT' />
        </Card>
      </ScrollView>
    );
  }
}

// function mapStateToProps(state, props) {
//   return {
//     selected: state.selected
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     selectAction: bindActionCreators(selectAction, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SearchGender);
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
