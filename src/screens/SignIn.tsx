import React, {useState, FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDebounce} from 'use-debounce';

// import {TextInput} from 'react-native-paper';
import Wrong from '../assets/icons/Error.svg';
import Done from '../assets/icons/Round.svg';
import Reguired from '../assets/icons/RequiredAsterisk.svg';
import Logo from '../assets/icons/LogoFiPay.svg';
import AllertIcon from '../assets/icons/Alert.svg';
import Eye from '../assets/icons/Eye.svg';
import Verified from '../assets/icons/Done.svg';
import {SignInButton} from '../components/buttons/SignInButton';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    Keyboard.dismiss();
  };

  const passwordValidation = /[\w]{8}/.test(password);
  const [isValidPassword] = useDebounce(passwordValidation, 2000);

  const emailAndPhonrRegexp =
    /(^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)|(\+?)\d+[0-9\-)(\s)]{8,16}(?:\d)/gi;
  const emailValidation = emailAndPhonrRegexp.test(email);
  const [isEmailValid] = useDebounce(emailValidation, 2000);

  const ACTIVE_BUTTON = email || password;

  const WARNING_MESSAGE = !isValidPassword && password.length >= 5;
  const VERIFIED_PASSWORD = passwordValidation && !WARNING_MESSAGE;
  const SHOW_PASSWORD_ICON = !WARNING_MESSAGE && !VERIFIED_PASSWORD;

  const ERROR_EMAIL_MESSAGE = !isEmailValid && email.length >= 5;
  const VERIFIED_EMAIL_OR_PHONE = emailValidation && !ERROR_EMAIL_MESSAGE;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBarContainer}>
        <Logo width={24} height={24} />
      </View>

      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.formWrapper}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Sign in to{' '}
              <Text style={[styles.title, styles.highlightTitle]}>FiPay</Text>
            </Text>
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputLabel}>
              <Text style={styles.inputText}>Email or Phone Number</Text>
              <View style={styles.reguired}>
                <Reguired width={7} height={7} />
              </View>
            </View>
            <View
              style={
                ERROR_EMAIL_MESSAGE
                  ? styles.inputErrorContainer
                  : styles.inputContainer
              }>
              <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.input}
              />
              {ERROR_EMAIL_MESSAGE && <AllertIcon />}
              {VERIFIED_EMAIL_OR_PHONE && <Verified />}
            </View>
          </View>
          {ERROR_EMAIL_MESSAGE && (
            <View style={styles.wrongPasswordContainer}>
              <View style={styles.spacer} />
              <Wrong />
              <Text style={styles.wrongPasswordText}>
                Invalid email or Phone number
              </Text>
            </View>
          )}

          <View style={styles.inputWrapper}>
            <View style={styles.inputLabel}>
              <Text style={styles.inputText}>Password</Text>
              <View style={styles.reguired}>
                <Reguired width={7} height={7} />
              </View>
            </View>

            <View
              style={
                WARNING_MESSAGE
                  ? styles.inputErrorContainer
                  : styles.inputContainer
              }>
              <TextInput
                onChangeText={setPassword}
                value={password}
                style={styles.input}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                {SHOW_PASSWORD_ICON && <Eye />}
                {WARNING_MESSAGE && <AllertIcon />}
                {VERIFIED_PASSWORD && <Verified />}
              </TouchableOpacity>
            </View>
          </View>
          {WARNING_MESSAGE && (
            <View style={styles.wrongPasswordContainer}>
              <View style={styles.spacer} />
              <Wrong />
              <Text style={styles.wrongPasswordText}>Invalid password</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={styles.checkboxWrapper}>
            {checked ? (
              <View style={styles.checked}>
                <Done width={11} height={8} />
              </View>
            ) : (
              <View style={styles.checkbox} />
            )}
            <Text style={styles.checkboxText}>Remember me</Text>
          </TouchableOpacity>

          <SignInButton active={ACTIVE_BUTTON} text="Sign in" />
          <TouchableOpacity style={styles.resetPassword}>
            <Text style={styles.resetPassText}>Forgot the password?</Text>
          </TouchableOpacity>

          <View style={styles.signUpcontainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.resetPassText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  checkboxWrapper: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkbox: {
    height: 16,
    width: 16,
    borderColor: '#6D5FFD',
    borderWidth: 2,
    borderRadius: 2,
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#6D5FFD',
    height: 16,
    width: 16,
    borderRadius: 2,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A5ABB3',
  },
  input: {
    width: '85%',
    marginRight: 12,
    paddingHorizontal: 16,
  },
  inputErrorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DA1414',
  },
  inputLabel: {
    flexDirection: 'row',
  },
  inputWrapper: {
    height: 80,
    marginTop: 20,
  },
  inputText: {
    color: '#2C3A4B',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 8,
  },
  reguired: {
    marginTop: 4,
    marginLeft: 2,
  },
  formWrapper: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginBottom: 40,
    height: 50,
  },
  title: {
    color: '#394452',
    fontWeight: '600',
    fontSize: 33,
  },
  highlightTitle: {
    color: '#6D5FFD',
  },
  resetPassword: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPassText: {
    color: '#6D5FFD',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  signUpcontainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpText: {
    color: '#858C94',
  },
  wrongPasswordContainer: {
    flexDirection: 'row',
    backgroundColor: '#FEEFEF',
    height: 33,
    marginTop: 8,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  wrongPasswordText: {
    color: '#DA1414',
    marginLeft: 4,
  },
  spacer: {
    marginLeft: 15,
  },
});
