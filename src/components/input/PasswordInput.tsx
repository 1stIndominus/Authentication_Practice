import React, {FC, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import {useDebounce} from 'use-debounce';

import Wrong from '../../assets/icons/Error.svg';
import AllertIcon from '../../assets/icons/Alert.svg';
import Eye from '../../assets/icons/Eye.svg';
import Crosseye from '../../assets/icons/Crosseye.svg';
import Verified from '../../assets/icons/Done.svg';
import Reguired from '../../assets/icons/RequiredAsterisk.svg';

interface Props {
  title: string;
  setShowPassword: (arg: boolean) => void;
  showPassword: boolean;
  setPassword: (arg: string) => void;
  password: string;
}

const InputIcon: FC<{}> = ({props}: any) => {
  const {
    SHOW_PASSWORD_ICON,
    SHOW_CROSSED_EYE,
    WARNING_MESSAGE,
    VERIFIED_PASSWORD,
  } = props;
  const HandleProperIcon = useMemo(() => {
    if (SHOW_PASSWORD_ICON) {
      return <Eye />;
    }
    if (SHOW_CROSSED_EYE) {
      return <Crosseye />;
    }
    if (WARNING_MESSAGE) {
      return <AllertIcon />;
    }
    if (VERIFIED_PASSWORD) {
      return <Verified />;
    }
  }, [
    SHOW_CROSSED_EYE,
    SHOW_PASSWORD_ICON,
    VERIFIED_PASSWORD,
    WARNING_MESSAGE,
  ]);
  return HandleProperIcon;
};

export const PasswordInput: FC<Props> = ({
  setShowPassword,
  showPassword,
  setPassword,
  password,
  title,
}) => {
  const passwordValidation = /[\w]{8}/.test(password);
  const [isValidPassword] = useDebounce(passwordValidation, 3000);
  const [isPasswordLenghtValid] = useDebounce(password.length > 5, 3000);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
    Keyboard.dismiss();
  }, [showPassword, setShowPassword]);

  const WARNING_MESSAGE = !isValidPassword && isPasswordLenghtValid;
  const VERIFIED_PASSWORD = passwordValidation && !WARNING_MESSAGE;
  const SHOW_PASSWORD_ICON =
    !WARNING_MESSAGE && !VERIFIED_PASSWORD && !showPassword;
  const SHOW_CROSSED_EYE =
    showPassword &&
    !VERIFIED_PASSWORD &&
    !WARNING_MESSAGE &&
    !SHOW_PASSWORD_ICON;

  const options = {
    SHOW_PASSWORD_ICON,
    SHOW_CROSSED_EYE,
    WARNING_MESSAGE,
    VERIFIED_PASSWORD,
  };

  return (
    <>
      <View style={styles.inputWrapper}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>{title}</Text>
          <View style={styles.reguired}>
            <Reguired width={7} height={7} />
          </View>
        </View>

        <View
          style={
            WARNING_MESSAGE ? styles.inputErrorContainer : styles.inputContainer
          }>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.input}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <InputIcon props={options} />
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
    </>
  );
};

export const styles = StyleSheet.create({
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
    marginLeft: 16,
    marginBottom: 8,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  reguired: {
    marginTop: 4,
    marginLeft: 2,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A5ABB3',
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
  spacer: {
    marginLeft: 15,
  },
  wrongPasswordText: {
    color: '#DA1414',
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
});
