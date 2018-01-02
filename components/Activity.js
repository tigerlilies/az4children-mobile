import React from 'react';
import { ScrollView, StyleSheet, Linking, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const Activity = (props) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Suggested Activities
        </Text>
      </View>
      <ScrollView>
        <Card title='Bass Pro Shops - Tuesday evenings - FREE'>
          <Text>1133 North Dobson Mesa, AZ 85201 US</Text>
          <Text>(602) 606-5600</Text>
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://stores.basspro.com')}>
            https://stores.basspro.com
          </Text>
        </Card>
        <Card title='Lost Our Home Pet Foundation - Service activity - FREE'>
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.lostourhome.org/volunteer/youth-volunteers')}>
            https://www.lostourhome.org/volunteer/youth-volunteers
          </Text>
        </Card>
        <Card title='Fitness in the District - FREE'>
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.westgateaz.com/fitness/')}>
            http://www.westgateaz.com/fitness/
          </Text>
        </Card>
        <Card title='Stargazing at Maricopa County Parks'>
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.maricopacountyparks.net/things-to-do/activity/stargazing/')}>
            https://www.maricopacountyparks.net/things-to-do/activity/stargazing/
          </Text>
        </Card>
        <Card title='Kiwanis Park'>
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.tempe.gov/city-hall/community-services/community-recreation-centers/kiwanis-recreation-center')}>
            http://www.tempe.gov/city-hall/community-services/community-recreation-centers/kiwanis-recreation-center
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}

export default Activity;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#523F78'
  }
});
