import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';
import * as selectAction from '../actions/selected';

const searchBtn = (props) => {
  const { navigate } = props.navigation;
  props.selectAction.setGender('M');
  console.log('in searchBtn >>> props after', props);
  navigate('SearchAge');
}

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
        <Picker
          selectedValue="0">
          <Picker.Item label="Any" value="0" />
          <Picker.Item label="Boy" value="m" />
          <Picker.Item label="Girl" value="f" />
        </Picker>
        <Button
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
          onPress={() => searchBtn(props)}
          title='NEXT' />
      </Card>
    </ScrollView>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    selectAction: bindActionCreators(selectAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchGender);

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
