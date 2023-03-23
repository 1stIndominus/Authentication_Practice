import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import {useDebounce} from 'use-debounce';
import Reguired from '../../assets/icons/RequiredAsterisk.svg';
import AllertIcon from '../../assets/icons/Alert.svg';
import Verified from '../../assets/icons/Done.svg';
import Wrong from '../../assets/icons/Error.svg';

interface Props {
  email: string;
  setEmail: (arg: string) => void;
}

export const EmailInput: FC<Props> = ({email, setEmail}) => {
  const emailAndPhonrRegexp =
    /(^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)|(\+?)\d+[0-9\-)(\s)]{8,16}(?:\d)/gi;
  const emailValidation = emailAndPhonrRegexp.test(email);
  const [isEmailValid] = useDebounce(emailValidation, 3000);
  const [isEmailLengthValid] = useDebounce(email.length >= 5, 3000);

  const ERROR_EMAIL_MESSAGE = !isEmailValid && isEmailLengthValid;
  const VERIFIED_EMAIL_OR_PHONE = emailValidation && !ERROR_EMAIL_MESSAGE;
  return (
    <>
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
    </>
  );
};

export const styles = StyleSheet.create({
  inputWrapper: {
    height: 80,
    marginTop: 20,
  },
  inputLabel: {
    flexDirection: 'row',
  },
  inputText: {
    color: '#2C3A4B',
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 8,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  reguired: {
    marginTop: 4,
    marginLeft: 2,
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
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
  spacer: {
    marginLeft: 15,
  },
});
