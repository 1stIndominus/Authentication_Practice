import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SignIn} from './screens/SignIn';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
