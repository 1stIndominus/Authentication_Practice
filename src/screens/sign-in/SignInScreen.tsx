import React, {useState, FC} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignInButton} from '../../components/buttons/SignInButton';
import {styles} from './styles';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {PasswordInput} from '../../components/input/PasswordInput';
import {EmailInput} from '../../components/input/EmailInput';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/icons/LogoFiPay.svg';

export const SignInScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const {navigate} = useNavigation<any>();

  const DISABLE_BUTTON = email !== '' || password !== '';
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

          <EmailInput email={email} setEmail={setEmail} />

          <PasswordInput
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            setPassword={setPassword}
            password={password}
          />

          <View style={styles.checkboxWrapper}>
            <Checkbox setChecked={setChecked} checked={checked} />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>

          <SignInButton active={DISABLE_BUTTON} text="Sign in" goTo={''} />
          <TouchableOpacity style={styles.resetPassword}>
            <Text style={styles.resetPassText}>Forgot the password?</Text>
          </TouchableOpacity>

          <View style={styles.signUpcontainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigate('Create Account')}>
              <Text style={styles.resetPassText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
