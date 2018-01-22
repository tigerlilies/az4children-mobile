import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as utilAction from '../actions/utils';
import config from '../config/config';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const { EMAIL_SENDTO,
  EMAIL_SUBJECT,
  EMAIL_INTRO1,
  EMAIL_INTRO2 } = config;

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      mentorEmail: ''
    };
  }

  processSubmit(props) {
    console.log('in processSubmit >>> mentorEmail:', this.state.mentorEmail);
    if (this.state.mentorEmail === '' || this.state.mentorEmail === undefined) {
      this.setState({errorMessage: 'Email address is required!'});
    } else {
      const { navigate } = props.navigation;
      let { id,
        firstname,
        lastname } = props.navigation.state.params;
      utilAction.sendEmail({
      	to: EMAIL_SENDTO,
        subject: EMAIL_SUBJECT,
        text: EMAIL_INTRO1,
        html: `<p>${EMAIL_INTRO1}: ${this.state.mentorEmail}</p>
          <p>${EMAIL_INTRO2}:</p>
          <p>ID: ${id}</p>
          <p>First Name: ${firstname}</p>
          <p>Last Name: ${lastname}</p>`
      });
      navigate('Home');
    }
  }

  render() {
    // console.log('in Confirm >>> props', this.props);
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
      characteristic3 } = this.props.navigation.state.params;
    let g = gender === 'M' ? 'Boy' : 'Girl';

    return (
      <View style={styles.container}>
        <FormLabel>Email address:</FormLabel>
        <FormInput
          placeholder="Please enter your email address"
          onChangeText={val => {
            console.log('val', val);
            this.setState({mentorEmail: val});
            console.log('mentorEmail', this.state.mentorEmail);
          }}
          autoCapitalize="none"
        />
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
        <Text style={{paddingTop: 20}}>Thank you for your interest to mentor a {age} years old {g} to mentor.</Text>
        <Text style={styles.summaryStyle}>Summary:</Text>
        <Text>{summary}</Text>
        <Text style={styles.spacer}>
          If you have not filled out an application, please click on the link below:
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('http://arizonansforchildren.org/page/volunteer-application')}>
          Volunteer Application Form
        </Text>
        <Button
          icon={{name: 'email'}}
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 50, marginBottom: 100}}
          title='SUBMIT'
          onPress={() => this.processSubmit(this.props)}
        />
      </View>
    );

  }

}

function mapDispatchToProps(dispatch) {
  return {
    utilAction: bindActionCreators(utilAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Confirm);

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  summaryStyle: {
    paddingTop: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  spacer: {
    paddingTop: 15
  }
});
