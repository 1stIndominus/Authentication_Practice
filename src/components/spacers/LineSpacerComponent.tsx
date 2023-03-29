import React from 'react';
import {View, StyleSheet} from 'react-native';

export const LineSpacerComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEEF2',
    height: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});
