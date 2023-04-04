import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {LineSpacerComponent} from '../spacers/LineSpacerComponent';
import {payingHistory} from '../credit-card/Data';

import ArrowUp from '../../assets/icons/ArrowUp.svg';
import ArrowDown from '../../assets/icons/ArrowD.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';

const Icon = ({activeIcon}: any) => {
  if (activeIcon) {
    return <ArrowUp fill={'#FF1843'} />;
  } else {
    return <ArrowDown fill={'#6D5FFD'} />;
  }
};

export const TransferList = () => {
  const [activeIcon, setActiveIcon] = useState(false);

  const toggleIcon = useCallback(() => {
    setActiveIcon(!activeIcon);
  }, [activeIcon]);

  const renderItem = useCallback(
    (args: any) => {
      const {name, price} = args;
      const date = new Date();
      let formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={toggleIcon} style={styles.iconContainer}>
              <Icon activeIcon={activeIcon} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.billName}>{name}</Text>
              <Text style={styles.billDate}>{formattedDate}</Text>
            </View>

            <View style={styles.countContainer}>
              <Text style={styles.countText}>${price}</Text>
              <TouchableOpacity>
                <ArrowRight fill={'#6D5FFD'} />
              </TouchableOpacity>
            </View>
          </View>
          <LineSpacerComponent />
        </>
      );
    },
    [activeIcon, toggleIcon],
  );

  return (
    <FlatList
      data={payingHistory}
      renderItem={({item}) => renderItem({name: item.name, price: item.price})}
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
  iconContainer: {
    backgroundColor: '#F0EFFF',
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
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
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 15,
  },
  countText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontFamily: 'SourceSansPro-SemiBold',
    marginRight: 15,
  },
});
