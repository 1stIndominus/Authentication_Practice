import React, {useCallback} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {payingBills} from '../credit-card/Data';
import {LineSpacerComponent} from '../spacers/LineSpacerComponent';

import Wifi from '../../assets/icons/Wifi.svg';
import Market from '../../assets/icons/Market.svg';
import Store from '../../assets/icons/Store.svg';
import Buscket from '../../assets/icons/Buscket.svg';

const Icon = ({name}: any) => {
  if (name === 'Market bills') {
    return <Buscket />;
  }
  if (name === 'Supermarket bills') {
    return <Market />;
  }
  if (name === 'Wifi bills') {
    return <Wifi />;
  }
  if (name === 'Store bills') {
    return <Store />;
  }
};

export const BillCardComponent = () => {
  const renderItem = useCallback((args: any) => {
    const {name} = args;

    const date = new Date();
    let formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon name={name} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.billName}>{name}</Text>
            <Text style={styles.billDate}>{formattedDate}</Text>
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
        <LineSpacerComponent />
      </>
    );
  }, []);

  return (
    <FlatList
      data={payingBills}
      renderItem={({item}) => renderItem({name: item.name})}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 56,
    position: 'relative',
  },
  billName: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 6,
  },
  billDate: {
    color: '#858C94',
    fontSize: 11,
    fontFamily: 'SourceSansPro-Regular',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 16,
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#F0EFFF',
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonContainer: {
    width: 90,
    height: 38,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#6D5FFD',
    position: 'absolute',
    right: 0,
    top: 9,
  },
  buttonText: {
    color: '#6D5FFD',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
