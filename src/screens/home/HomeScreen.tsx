import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {CreditCardComponent} from '../../components/credit-card/CreditCardComponent';
import {BillCardComponent} from '../../components/bill-list/BillCardComponent';
import {useNavigation} from '@react-navigation/native';

import Clock from '../../assets/icons/Clock.svg';

export const HomeScreen = () => {
  const {navigate} = useNavigation<any>();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.text}>Good morning, John!</Text>
          <TouchableOpacity onPress={() => navigate('Transaction history')}>
            <Clock />
          </TouchableOpacity>
        </View>
        <CreditCardComponent />

        <View style={styles.billContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Upcomming bill</Text>
            <TouchableOpacity>
              <Text style={styles.highlightedTitle}>See All</Text>
            </TouchableOpacity>
          </View>
          <BillCardComponent />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  billContainer: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  text: {
    color: '#2C3A4B',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 28,
  },
  title: {
    color: '#2C3A4B',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highlightedTitle: {
    color: '#6D5FFD',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
  },
});
