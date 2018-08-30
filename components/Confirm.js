import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Linking } from 'react-native';
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
      errorLName: '',
      errorFName: '',
      errorPhone: '',
      errorEmail: '',
      mentorLName: '',
      mentorFName: '',
      mentorPhone: '',
      mentorEmail: ''
    };
  }

  processSubmit(props) {
    let isValidationFailed = false;
    const { mentorEmail, mentorFName, mentorLName, mentorPhone } = this.state;

    this.setState({ errorLName: '' });
    this.setState({ errorFName: '' });
    this.setState({ errorPhone: '' });
    this.setState({ errorEmail: '' });

    if (mentorEmail === '' || mentorEmail === undefined) {
      this.setState({ errorEmail: `Email address is required!` });
      isValidationFailed = true;
    }

    if (mentorFName === '' || mentorFName === undefined) {
      this.setState({ errorFName: `First name is required!` });
      isValidationFailed = true;
    }

    if (mentorLName === '' || mentorLName === undefined) {
      this.setState({ errorLName: `Last name is required!` });
      isValidationFailed = true;
    }

    if (mentorPhone === '' || mentorPhone === undefined) {
      this.setState({ errorPhone: `Phone number is required!` });
      isValidationFailed = true;
    }

    if (isValidationFailed) return;

    const { navigate } = props.navigation;
    let { id } = props.navigation.state.params;
    // utilAction.sendEmail({
    //   to: EMAIL_SENDTO,
    //   subject: EMAIL_SUBJECT,
    //   text: EMAIL_INTRO1,
    //   html: `<p>${EMAIL_INTRO1}: ${mentorEmail}</p>
    //     <p>${EMAIL_INTRO2}:</p>
    //     <p>ID: ${id}</p>`
    // });
    navigate('Home');
  }

  render() {
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
    let g = gender === 'M' ? 'boy' : 'girl';

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FormLabel>Last Name:</FormLabel>
        <FormInput
          placeholder = "Enter your last name"
          onChangeText={val => {
            this.setState({mentorLName: val});
          }}
          autoCapitalize="none"
        />
        <FormValidationMessage>{this.state.errorLName}</FormValidationMessage>
        <FormLabel>First Name:</FormLabel>
        <FormInput
          placeholder="Enter your first name"
          onChangeText={val => {
            this.setState({mentorFName: val});
          }}
          autoCapitalize="none"
        />
        <FormValidationMessage>{this.state.errorFName}</FormValidationMessage>
        <FormLabel>Phone Number:</FormLabel>
        <FormInput
          placeholder = "Enter your phone number"
          onChangeText={val => {
            this.setState({mentorPhone: val});
          }}
          autoCapitalize="none"
        />
        <FormValidationMessage>{this.state.errorPhone}</FormValidationMessage>
        <FormLabel>Email address:</FormLabel>
        <FormInput
          placeholder = "Enter your email address"
          onChangeText={val => {
            this.setState({mentorEmail: val});
          }}
          autoCapitalize="none"
        />
        <FormValidationMessage>{this.state.errorEmail}</FormValidationMessage>
        <Text style={{paddingTop: 20}}>
          Thank you for your interest to mentor a {age} years old {g}. One of our coordinators will contact you.
        </Text>
        <Text style={styles.summaryStyle}>Summary:</Text>
        <Text>{summary}</Text>
        <Text style={styles.spacer}>
          If you have not filled out an application, please check out link below after submitting this form:
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('http://arizonansforchildren.org/page/volunteer-application')}>
          Volunteer Application Form
        </Text>
        <Button
          icon={{name: 'email'}}
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 50, marginBottom: 200}}
          title='SUBMIT'
          onPress={() => this.processSubmit(this.props)}
        />
      </ScrollView>
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
