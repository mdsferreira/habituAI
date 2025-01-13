import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthenticationUtils from '@/utils/authentication';
import { LoginScreen, InitialScreen, RegisterScreen } from '@/pages';
import { MainTabs } from '@/components';
import { getToken, setToken } from '@/slices/userSlice';
import { AppDispatch, IState } from './store';

export const ROUTES = {
  initial: 'Initial',
  login: 'Login',
  register: 'Register',
  signup: 'SignUp',
  home: 'Home'
};

const Stack = createNativeStackNavigator();
const StackAuthenticated = createNativeStackNavigator();

const AppStackAuthenticated = () => (
  <MainTabs />
);

const AppStack = () => (
  <Stack.Navigator initialRouteName={ROUTES.initial}>
    <StackAuthenticated.Screen
      name={ROUTES.initial}
      component={InitialScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.login}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.register}
      component={RegisterScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Routes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: IState) => getToken(state));
  useEffect(() => {
    if (!token) {
      AuthenticationUtils.getToken().then((newToken) => {
        dispatch(setToken({ token: newToken || "" }));
      })
    }
  }, [token])
  if (!token || !AuthenticationUtils.isTokenValid(token)) return <AppStack />;
  return (<AppStackAuthenticated />);
};

export default Routes;