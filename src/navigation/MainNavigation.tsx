import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccountScreen} from '../screens/create-account/CreateAccountScreen';
import {SignInScreen} from '../screens/sign-in/SignInScreen';
import {VerificationScreen} from '../screens/verification/VerificationScreen';
import {CountryRegionScreen} from '../screens/region/CountryRegionScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Country/Region"
        component={CountryRegionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
