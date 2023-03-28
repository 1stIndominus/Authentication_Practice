import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainNavigation} from '../src/navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
