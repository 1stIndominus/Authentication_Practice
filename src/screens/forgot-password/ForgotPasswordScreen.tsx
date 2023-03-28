import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../../assets/icons/Goback.svg';
import {useNavigation} from '@react-navigation/native';
import {NoErrorInput} from '../../components/input/NoErrorInput';
import {SignInButton} from '../../components/buttons/SignInButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const {goBack} = useNavigation();
  const emailAndPhonrRegexp =
    /(^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)|(\+?)\d+[0-9\-)(\s)]{8,16}(?:\d)/gi;

  const DISABLE_BUTTON = emailAndPhonrRegexp.test(email);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={goBack}>
          <BackButton />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView extraScrollHeight={70}>
        <View style={styles.spacerL}>
          <Text style={styles.title}>Forgot password</Text>
        </View>

        <View style={styles.spacerL}>
          <Text style={styles.paragraph}>
            Please enter your email, we will confirm the password change via
            email
          </Text>
        </View>

        <View style={styles.spacerM}>
          <NoErrorInput
            title={'Email'}
            name={email}
            setName={setEmail}
            confirmIcon={DISABLE_BUTTON}
          />
        </View>
        <View>
          <SignInButton
            active={DISABLE_BUTTON}
            text={'Confirm'}
            goTo={'Successful'}
          />
        </View>
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
  navBar: {
    height: 48,
    justifyContent: 'center',
    width: 20,
    marginBottom: 120,
  },
  title: {
    color: '#394452',
    fontSize: 33,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  paragraph: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: '#2C3A4B',
  },
  spacerM: {
    marginBottom: 20,
  },
  spacerL: {
    marginBottom: 40,
  },
});
