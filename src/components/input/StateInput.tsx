import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Reguired from '../../assets/icons/RequiredAsterisk.svg';
import ArrowDown from '../../assets/icons/ArrowDown.svg';

interface Props {
  title: string;
  name: string;
  setName: (args: string) => void;
  isVisible?: boolean;
}

export const StateInput: FC<Props> = ({title, name, setName, isVisible}) => {
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
        <TouchableOpacity>{isVisible && <ArrowDown />}</TouchableOpacity>
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
    paddingHorizontal: 26,
  },
  input: {
    width: '100%',
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
