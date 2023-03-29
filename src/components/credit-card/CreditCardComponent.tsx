import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {data} from './Data';
import Amazon from '../../assets/icons/Shape.svg';

const WIDTH = Dimensions.get('window').width - 72;

export const CreditCardComponent = () => {
  const [showCardNum, setShowCardNum] = useState(false);

  const togleShowNumber = useCallback(() => {
    setShowCardNum(!showCardNum);
  }, [showCardNum]);

  const renderItem = useCallback(
    (args: any) => {
      const {money, cardNumber} = args;
      const numberToShow = cardNumber.slice(-4);
      return (
        <View style={styles.cardcontainer}>
          <View style={styles.cardContent}>
            <ImageBackground
              resizeMode="contain"
              style={styles.imageWrapper}
              source={require('../../assets/images/Card.png')}>
              <View style={styles.navBar}>
                <Text style={styles.text}>Balance</Text>
                <Amazon />
              </View>
              <View style={styles.moneyWrapper}>
                <Text style={styles.moneyText}>{`$ ${money}`}</Text>
              </View>
              <View style={styles.spacer} />
              <View style={styles.moneyWrapper}>
                <Text style={styles.text}>Account number</Text>
                <TouchableOpacity
                  style={styles.numberContainer}
                  onPress={togleShowNumber}>
                  {showCardNum ? (
                    <>
                      <View style={styles.numberContainer}>
                        <Text style={styles.creditCardNum}>... ... ... </Text>
                      </View>
                      <Text style={styles.cardNumberText}>{numberToShow}</Text>
                    </>
                  ) : (
                    <View style={styles.shownNumberContainer}>
                      <Text style={styles.shownText}>{cardNumber}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
    },
    [showCardNum, togleShowNumber],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) =>
          renderItem({money: item.money, cardNumber: item.cardNumber})
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardcontainer: {
    flex: 1,
    width: WIDTH,
    height: 220,
    marginLeft: 24,
  },
  container: {
    backgroundColor: '#fff',
  },
  cardContent: {
    flex: 1,
  },
  imageWrapper: {flex: 1},
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomBar: {
    backgroundColor: 'yellow',
  },
  text: {
    color: '#fff',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
  },
  moneyWrapper: {
    marginLeft: 20,
    position: 'relative',
  },
  moneyText: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 33,
  },
  spacer: {
    marginTop: 58,
  },
  cardNumberText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontFamily: 'SourceSansPro-SemiBold',
    position: 'absolute',
    top: 28,
    left: 100,
  },
  creditCardNum: {
    color: '#FEFEFE',
    fontSize: 33,
  },
  numberContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 0,
  },
  shownNumberContainer: {
    position: 'absolute',
    top: 28,
    left: 0,
  },
  shownText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
