import React, {FC, useState, useRef} from 'react';
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
import GoBack from '../../assets/icons/Goback.svg';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
export const VerificationScreen: FC = () => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [seconds, setSeconds] = useState(60);

  const {goBack} = useNavigation();

  setTimeout(() => {
    if (seconds === 0) {
      return null;
    }
    setSeconds(seconds - 1);
  }, 1000);

  const DISABLE_BUTTON = !pin1 || !pin2 || !pin3 || !pin4;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView extraScrollHeight={100}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.navBar}>
              <TouchableOpacity onPress={goBack}>
                <GoBack />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Verification Code</Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={pin1Ref}
                  style={styles.input}
                  maxLength={1}
                  textAlign="center"
                  onChangeText={pin => {
                    setPin1(pin);
                    pin && pin2Ref.current?.focus();
                  }}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={pin2Ref}
                  style={styles.input}
                  maxLength={1}
                  textAlign="center"
                  onChangeText={pin => {
                    setPin2(pin);
                    pin ? pin3Ref.current?.focus() : pin1Ref.current?.focus();
                  }}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={pin3Ref}
                  style={styles.input}
                  maxLength={1}
                  textAlign="center"
                  onChangeText={pin => {
                    setPin3(pin);
                    pin ? pin4Ref.current?.focus() : pin2Ref.current?.focus();
                  }}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={pin4Ref}
                  style={styles.input}
                  maxLength={1}
                  textAlign="center"
                  onChangeText={pin => {
                    setPin4(pin);
                    !pin && pin3Ref.current?.focus();
                  }}
                />
              </View>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <View style={styles.buttonWrapper}>
        <SignInButton
          text={'Next'}
          active={!DISABLE_BUTTON}
          goTo={'Country/Region'}
        />
      </View>
      <Text style={styles.text}>Resend code in {seconds} s</Text>
    </SafeAreaView>
  );
};
