import React, {FC} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Done from '../../assets/icons/Round.svg';

interface Props {
  setChecked: (checked: boolean) => void;
  checked: boolean;
}

export const Checkbox: FC<Props> = ({setChecked, checked}) => {
  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      {checked ? (
        <View style={styles.checked}>
          <Done width={11} height={8} />
        </View>
      ) : (
        <View style={styles.checkbox} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 16,
    width: 16,
    borderColor: '#6D5FFD',
    borderWidth: 2,
    borderRadius: 2,
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#6D5FFD',
    height: 16,
    width: 16,
    borderRadius: 2,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
