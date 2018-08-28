import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Home = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
      <Card containerStyle={styles.cardStyle}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Button
          icon={{name: 'male-symbol', type: 'foundation'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
          onPress={() => navigate('ChildList', { gender: 'M' })}
          title='BOY' />
        <Button
          icon={{name: 'female-symbol', type: 'foundation' }}
          backgroundColor='#E91AD5'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 30}}
          onPress={() => navigate('ChildList', { gender: 'F' })}
          title='GIRL' />
        <Button
          icon={{name: 'search'}}
          backgroundColor='#523F78'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 80}}
          onPress={() => navigate('SearchGender')}
          title='ADVANCED SEARCH' />
      </Card>
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 70,
    marginBottom: 50,
    width: 200
  },
  cardStyle: {
    borderRadius: 5
  },
  containerStyle: {
    flexGrow: 1, 
    justifyContent: 'center'
  }
});
