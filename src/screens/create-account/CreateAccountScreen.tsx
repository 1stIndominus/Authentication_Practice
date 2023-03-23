import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Logo from '../../assets/icons/LogoFiPay.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {SignInButton} from '../../components/buttons/SignInButton';
import {PasswordInput} from '../../components/input/PasswordInput';
import {EmailInput} from '../../components/input/EmailInput';
import {NamedInput} from '../../components/input/NamedInput';

export const CreateAccountScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState('');

  const ACTIVE_BUTTON = email || password || name;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBarContainer}>
        <Logo width={24} height={24} />
      </View>

      <KeyboardAwareScrollView>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Create a new account</Text>
        </View>
        <NamedInput
          name={name}
          setName={setName}
          title={'Full Name'}
          invalidText={'Invalid Name'}
        />
        <EmailInput setEmail={setEmail} email={email} />
        <PasswordInput
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          setPassword={setPassword}
          password={password}
        />
        <View style={styles.checkboxWrapper}>
          <Checkbox setChecked={setChecked} checked={checked} />
          <View>
            <Text style={styles.checkboxText}>
              By creating an account, you agree to our
            </Text>
            <TouchableOpacity>
              <Text style={styles.highlightedText}>Term and Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SignInButton active={ACTIVE_BUTTON} text="Create Account" />

        <View style={styles.signUpcontainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.resetPassText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  mainTitleContainer: {
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  mainTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 33,
    color: '#394452',
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  signInText: {
    color: '#858C94',
    fontFamily: 'SourceSansPro-Regular',
  },
  signUpcontainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resetPassText: {
    color: '#6D5FFD',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  checkboxWrapper: {
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
  highlightedText: {
    color: '#6D5FFD',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
});
