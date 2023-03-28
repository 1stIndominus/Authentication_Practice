import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const SuccessScreen = () => {
  const {navigate} = useNavigation<any>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('New password');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/Success.png')}
        style={styles.imageContainer}
      />
      <Text style={styles.title}>Successful!</Text>
      <Text style={styles.paragraph}>Please check your email to confirm</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#6D5FFD',
    fontSize: 28,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 32,
    marginTop: 32,
  },
  paragraph: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: '#A5ABB3',
  },
  imageContainer: {
    width: 120,
    height: 120,
  },
});
