import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Arrow from '../../assets/icons/ArrowDown.svg';
import {TransferList} from '../../components/transfer-list/TransferList';
import {TransferChart} from '../../components/chart/TransferChart';

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

      <View style={styles.chartWrapper}>
        <TransferChart />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.secondTitle}>Transaction History</Text>
        <TouchableOpacity>
          <Text style={styles.highlightedTitle}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listWrapper}>
        <TransferList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 135,
  },
  secondTitle: {
    color: '#2C3A4B',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
  },
  highlightedTitle: {
    color: '#6D5FFD',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
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
  listWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  chartWrapper: {
    position: 'absolute',
    top: HEIGHT - 100,
    left: 24,
  },
});
