import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from '../src/navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MainNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
