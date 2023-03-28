import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {GraphicScreen} from '../screens/graphic/GraphicScreen';
import {AddCardScreen} from '../screens/add-card/AddCardScreen';
import {PushNotification} from '../screens/push-notification/PushNotificationScreen';
import {AccountScreen} from '../screens/account/AccountScreen';

import Home from '../assets/icons/Home.svg';
import Graph from '../assets/icons/Graphic.svg';
import Add from '../assets/icons/Addbtn.svg';
import Bell from '../assets/icons/Bell.svg';
import User from '../assets/icons/User.svg';

const Tab = createBottomTabNavigator();

const Icon = ({focused, name}: any) => {
  const handleIcon = useMemo(() => {
    if (name === 'Home') {
      return focused ? <Home fill="#6D5FFD" /> : <Home fill="#A5ABB3" />;
    } else if (name === 'Graphic') {
      return focused ? <Graph fill="#6D5FFD" /> : <Graph fill="#A5ABB3" />;
    } else if (name === 'Add Card') {
      return focused ? <Add fill="#6D5FFD" /> : <Add fill="#A5ABB3" />;
    } else if (name === 'Push notifications') {
      return focused ? <Bell fill="#6D5FFD" /> : <Bell fill="#A5ABB3" />;
    } else if (name === 'Account') {
      return focused ? <User fill="#6D5FFD" /> : <User fill="#A5ABB3" />;
    }
  }, [focused, name]);

  return handleIcon;
};

export const MainTabContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => <Icon focused={focused} name={'Home'} />,
        }}
      />
      <Tab.Screen
        name="Graphic"
        component={GraphicScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name={'Graphic'} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Card"
        component={AddCardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name={'Add Card'} />
          ),
        }}
      />
      <Tab.Screen
        name="Push notifications"
        component={PushNotification}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name={'Push notifications'} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name={'Account'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
