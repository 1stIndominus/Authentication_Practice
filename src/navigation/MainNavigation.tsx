import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccountScreen} from '../screens/create-account/CreateAccountScreen';
import {SignInScreen} from '../screens/sign-in/SignInScreen';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          headerTransparent: true,
          header: ({navigation}) => {},
        }}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccountScreen}
        options={{
          headerTransparent: true,
          header: ({navigation}) => {},
        }}
      />
    </Stack.Navigator>
  );
};
