import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Arrow from '../../assets/icons/ArrowDown.svg';

const HEIGHT = Dimensions.get('window').width / 1.8;

export const TransactionHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.navBar}>
          <Text style={styles.title}>Statistics</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>This week</Text>
            <Arrow width={12} height={12} fill={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    height: HEIGHT,
    backgroundColor: '#6D5FFD',
    paddingHorizontal: 24,
  },
  navBar: {
    height: 48,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 23,
  },
  button: {
    width: 108,
    height: 37,
    backgroundColor: '#6D5FFD',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 14,
  },
});
