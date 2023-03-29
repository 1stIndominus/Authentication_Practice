import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const HEIGHT = Dimensions.get('window').width / 1.8;

export const TransactionHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Text>Statistics</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    height: HEIGHT,
    backgroundColor: '#6D5FFD',
  },
});
