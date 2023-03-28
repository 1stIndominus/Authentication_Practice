import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {PasswordInput} from '../../components/input/PasswordInput';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {SignInButton} from '../../components/buttons/SignInButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Logo from '../../assets/icons/LogoFiPay.svg';

export const NewPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(true);
  const [checked, setChecked] = useState(false);

  const DISABLE_BUTTON =
    /[\w]{8}/.test(password) &&
    /[\w]{8}/.test(repeatedPassword) &&
    password === repeatedPassword;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.navBarContainer}>
          <Logo width={24} height={24} />
        </View>

        <Text style={styles.title}>New Password</Text>

        <PasswordInput
          title={'New password'}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          setPassword={setPassword}
          password={password}
        />

        <PasswordInput
          title={'Retype new password'}
          setShowPassword={setShowRepeatedPassword}
          showPassword={showRepeatedPassword}
          setPassword={setRepeatedPassword}
          password={repeatedPassword}
        />

        <View style={styles.checkboxWrapper}>
          <Checkbox setChecked={setChecked} checked={checked} />
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>

        <SignInButton active={DISABLE_BUTTON} text="Sign in" goTo={'Home'} />
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
  title: {
    color: '#394452',
    fontSize: 33,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 40,
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 150,
  },
  checkboxWrapper: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
