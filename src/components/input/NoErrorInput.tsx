import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Reguired from '../../assets/icons/RequiredAsterisk.svg';
import Verified from '../../assets/icons/Done.svg';

interface Props {
  title: string;
  name: string;
  setName: (args: string) => void;
  confirmIcon?: boolean;
}

export const NoErrorInput: FC<Props> = ({
  title,
  name,
  setName,
  confirmIcon,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputLabel}>
        <Text style={styles.inputText}>{title}</Text>
        <View style={styles.reguired}>
          <Reguired width={7} height={7} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput onChangeText={setName} value={name} style={styles.input} />
        {confirmIcon && <Verified />}
      </View>
    </View>
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
  reguired: {
    marginTop: 4,
    marginLeft: 2,
  },
});
