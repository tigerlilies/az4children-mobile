import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectAction from '../actions/selected';
import { StyleSheet, ScrollView, Text, Image, Picker } from 'react-native';
import { Card, Button } from 'react-native-elements';

const searchBtn = (props) => {
  const { navigate } = props.navigation;
  props.selectAction.setAge('1');
  console.log('in searchBtn >>> props after', props);
  navigate('SearchLength');
}

const SearchAge = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Card containerStyle={styles.cardContainer}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.label}>
          Select an Age Range
        </Text>
        <Picker>
          <Picker.Item label="Any" value="0" />
          <Picker.Item label="5 - 8 years" value="1" />
          <Picker.Item label="9 - 11 years" value="2" />
          <Picker.Item label="12 - 15 years" value="3" />
          <Picker.Item label="15 - 18 years" value="4" />
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

export default connect(null, mapDispatchToProps)(SearchAge);

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
