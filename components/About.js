import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Text } from 'react-native';

const About = (props) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>About us</Text>
      </View>
      <Text style={styles.aboutText}>
        Arizonans for Children exists to facilitate opportunities and provide effective solutions to alleviate hardships and improve the fragile lives of the abused, abandoned, and neglected children in foster care. We are a small agency that has a large impact with two visitation centers, a Tutor/Mentor program and a variety of programs, classes and special events.
      </Text>
      <Text style={styles.aboutText}>
        Our visitation centers allow children to spend time with their parents in a safe, fun and supervised environment.  This allows for happy and positive  memories to be created to help heal any trauma the kids have suffered.  These visitation centers and set up like recreation centers or a family room in a home with books, games, toys, movies and deep comfortable sofa&#39;s perfect for bonding.  Even if the children are never reunified permanently with their parents, our centers help them heal, help the family heal.  Our centers are run by our volunteers, people that want to make a difference in these kids lives.  Mentors have access to our visitation centers as a place to take their mentee.
      </Text>
      <Text style={styles.aboutText}>
        For information on additional volunteer opportunities go to: &nbsp;
        <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.arizonansforchildren.org/page/volunteering-with-arizonans-for-children')}>
          Volunteering with Arizonans for Children
        </Text>
      </Text>
    </ScrollView>
  );
}

export default About;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#523F78'
  },
  aboutText: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  }
});
