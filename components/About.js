import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const About = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        About
      </Text>
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  }
});
