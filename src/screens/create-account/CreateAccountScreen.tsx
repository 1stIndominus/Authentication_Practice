import React, {useState, FC} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Logo from '../../assets/icons/LogoFiPay.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {SignInButton} from '../../components/buttons/SignInButton';
import {PasswordInput} from '../../components/input/PasswordInput';
import {EmailInput} from '../../components/input/EmailInput';
import {NamedInput} from '../../components/input/NamedInput';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const CreateAccountScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState('');

  const {navigate} = useNavigation<any>();

  const DISABLE_BUTTON = email !== '' || password !== '' || name !== '';

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

        <SignInButton
          active={DISABLE_BUTTON}
          text="Create Account"
          goTo="Verification"
        />

        <View style={styles.signUpcontainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigate('Sign In')}>
            <Text style={styles.resetPassText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
