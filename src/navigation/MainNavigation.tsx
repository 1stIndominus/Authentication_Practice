import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccountScreen} from '../screens/create-account/CreateAccountScreen';
import {SignInScreen} from '../screens/sign-in/SignInScreen';
import {VerificationScreen} from '../screens/create-account/VerificationScreen';
import {CountryRegionScreen} from '../screens/create-account/CountryRegionScreen';
import {ForgotPasswordScreen} from '../screens/forgot-password/ForgotPasswordScreen';
import {SuccessScreen} from '../screens/forgot-password/SuccessScreen';
import {NewPasswordScreen} from '../screens/forgot-password/NewPasswordScreen';
import {MainTabContainer} from '../navigation/MainContainer';
// import {NavigationContainer} from '@react-navigation/native';
import {TransactionHistoryScreen} from '../screens/statistics/TransactionHistoryScreen';

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
        name="Home"
        component={MainTabContainer}
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
        name="Forgot password"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Successful"
        component={SuccessScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="New password"
        component={NewPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transaction history"
        component={TransactionHistoryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
