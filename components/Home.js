import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Home = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Card containerStyle={styles.cardContainer}>
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
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 50}}
          onPress={() => navigate('ChildList', { gender: 'F' })}
          title='GIRL' />
        <Button
          icon={{name: 'search'}}
          backgroundColor='#07C02E'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 100}}
          onPress={() => navigate('SearchGender')}
          title='ADVANCED SEARCH' />
      </Card>
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10
  },
  logo: {
    marginTop: 80,
    marginLeft: 50,
    marginBottom: 50,
    width: 200
  }
});
