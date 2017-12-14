import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Activity = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Suggested Activities
      </Text>
    </View>
  );
}

export default Activity;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  }
});
