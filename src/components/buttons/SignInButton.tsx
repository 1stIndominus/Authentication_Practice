import React, {FC, useCallback} from 'react';
import {Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
  active: boolean;
  goTo: string;
}

export const SignInButton: FC<Props> = ({active, text, goTo}) => {
  const {navigate} = useNavigation<any>();
  const handleSignIn = useCallback(() => {
    navigate(goTo);
    Keyboard.dismiss();
  }, [goTo, navigate]);

  return (
    <TouchableOpacity
      onPress={handleSignIn}
      disabled={!active}
      style={active ? styles.signInActiveButton : styles.signInDisabledButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInDisabledButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#B6AFFE',
    justifyContent: 'center',
    alignItems: 'center',
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
