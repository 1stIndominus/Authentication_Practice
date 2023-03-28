import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {data} from './Data';
import Amazon from '../../assets/icons/Shape.svg';

const WIDTH = Dimensions.get('window').width - 72;

export const CreditCardComponent = () => {
  const renderItem = () => {
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
          </ImageBackground>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        // keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardcontainer: {
    flex: 1,
    width: WIDTH,
    height: 220,
    marginBottom: 200,
    marginLeft: 24,
  },
  container: {
    flex: 1,
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
    marginTop: 24,
  },
  bottomBar: {
    backgroundColor: 'yellow',
  },
  text: {
    color: '#fff',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
  },
});
