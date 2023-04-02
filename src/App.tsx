import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainNavigation} from '../src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
