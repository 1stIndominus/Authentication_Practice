import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SignInButton} from '../../components/buttons/SignInButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NoErrorInput} from '../../components/input/NoErrorInput';
import {StateInput} from '../../components/input/StateInput';

import Logo from '../../assets/icons/LogoFiPay.svg';

export const CountryRegionScreen = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const DISABLE_BUTTON = !country || !state || !street || !city;
  const isStateIconVisible = state.length === 0;
  const isCountryIconVisible = state.length === 0;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.navBarContainer}>
              <Logo width={24} height={24} />
            </View>

            <Text style={styles.title}>Create a new account</Text>

            <StateInput
              isVisible={isCountryIconVisible}
              title={'Country/Region'}
              name={country}
              setName={setCountry}
            />

            <View style={styles.stateWrapper}>
              <View style={styles.inputs}>
                <StateInput
                  isVisible={isStateIconVisible}
                  title={'State'}
                  name={state}
                  setName={setState}
                />
              </View>
              <View style={styles.inputs}>
                <NoErrorInput title={'City'} name={city} setName={setCity} />
              </View>
            </View>

            <NoErrorInput title={'Street'} name={street} setName={setStreet} />
            <View style={styles.spacer} />

            <SignInButton
              active={!DISABLE_BUTTON}
              text="Create Account"
              goTo={'Home'}
            />
          </>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  title: {
    color: '#394452',
    fontSize: 33,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 40,
    marginTop: 100,
  },
  spacer: {
    marginBottom: 20,
  },
  stateWrapper: {
    flexDirection: 'row',
    // marginRight: 20,
    justifyContent: 'space-between',
  },
  inputs: {
    width: '47%',
    // marginRight: 20,
  },
});
