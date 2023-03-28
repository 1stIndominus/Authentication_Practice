import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {CreditCardComponent} from '../../components/credit-card/CreditCardComponent';

export const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.text}>Good morning, John!</Text>
        </View>
      </SafeAreaView>
      <CreditCardComponent />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  navBar: {
    marginTop: 24,
  },
  bottomBar: {
    backgroundColor: 'yellow',
  },
  text: {
    color: '#2C3A4B',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 28,
  },
});
