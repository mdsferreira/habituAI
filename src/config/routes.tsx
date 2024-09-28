import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../pages/initial';
import { Login } from '../pages/login';

export const ROUTES = {
  initial: 'Initial',
  login: 'Login',
  signup: 'SignUp',
};



const Stack = createNativeStackNavigator();

const AppStack = ({ defaultScreen }: { defaultScreen: string }) => (
  <Stack.Navigator initialRouteName={defaultScreen}>
    <Stack.Screen
      name={ROUTES.initial}
      component={Initial}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.login}
      component={Login}
      options={{
        headerShown: false,
      }}
    />

  </Stack.Navigator>
);

const Routes = () => {
  return (
    <AppStack defaultScreen={ROUTES.initial} />);
};

export default Routes;