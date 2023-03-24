import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useDebounce} from 'use-debounce';

import Wrong from '../../assets/icons/Error.svg';
import Reguired from '../../assets/icons/RequiredAsterisk.svg';
import AllertIcon from '../../assets/icons/Alert.svg';
import Verified from '../../assets/icons/Done.svg';

interface Props {
  title: string;
  invalidText: string;
  name: string;
  setName: (args: string) => void;
}

export const NamedInput: FC<Props> = ({title, invalidText, name, setName}) => {
  const nameRegexp = /[a-zA-Z]{2,}[\s][a-zA-Z]{2,}/gi;
  const nameValidation = nameRegexp.test(name);

  const [isNameValid] = useDebounce(nameValidation, 3000);
  const [isNameLengthValid] = useDebounce(name.length > 2, 3000);

  const ERROR_NAME_MESSAGE = !isNameValid && isNameLengthValid;
  const VERIFIED_NAME = !ERROR_NAME_MESSAGE && isNameLengthValid;
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
            ERROR_NAME_MESSAGE
              ? styles.inputErrorContainer
              : styles.inputContainer
          }>
          <TextInput onChangeText={setName} value={name} style={styles.input} />
          {ERROR_NAME_MESSAGE && <AllertIcon />}
          {VERIFIED_NAME && <Verified />}
        </View>
      </View>
      {ERROR_NAME_MESSAGE && (
        <View style={styles.wrongPasswordContainer}>
          <View style={styles.spacer} />
          <Wrong />
          <Text style={styles.wrongPasswordText}>{invalidText}</Text>
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
