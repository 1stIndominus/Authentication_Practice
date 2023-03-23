import React, {FC, useCallback} from 'react';
import {Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';

interface Props {
  text: string;
  active: string;
}

export const SignInButton: FC<Props> = ({active, text}) => {
  const handleSignIn = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <TouchableOpacity
      onPress={handleSignIn}
      style={active ? styles.signInActiveButton : styles.signInDisabledButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInDisabledButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#6D5FFD',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 18,
  },
  signInActiveButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#6D5FFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
