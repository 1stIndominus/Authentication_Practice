import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SignInButton} from '../../components/buttons/SignInButton';
import {NamedInput} from '../../components/input/NamedInput';

import Logo from '../../assets/icons/LogoFiPay.svg';

export const CountryRegionScreen = () => {
  const [street, setStreet] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBarContainer}>
        <Logo width={24} height={24} />
      </View>

      <Text style={styles.title}>Create a new account</Text>
      <View style={styles.spacer}>
        <NamedInput
          title={'Street'}
          invalidText={'Invalid Street'}
          name={street}
          setName={setStreet}
        />
      </View>

      <SignInButton active={false} text="Sign in" goTo={''} />
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
  },
  spacer: {
    marginBottom: 20,
  },
});
