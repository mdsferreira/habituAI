import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../pages/initial';
import { Login } from '../pages/login';
import MainTabs from '../components/bottomTabs';
import * as AuthenticationUtils from '../utils/authentication';
import RegisterScreen from '../pages/register';
import { getToken, setToken } from '../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
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