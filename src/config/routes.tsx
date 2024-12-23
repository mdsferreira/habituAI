import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../pages/initial';
import { Login } from '../pages/login';
import MainTabs from '../components/bottomTabs';
import * as AuthenticationUtils from '../utils/authentication';

export const ROUTES = {
  initial: 'Initial',
  login: 'Login',
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

  </Stack.Navigator>
);

const Routes = () => {
  const [token, setTk] = useState("")
  const getToken = async () => await AuthenticationUtils.getToken()
  useEffect(() => {
    getToken().then((res) => setTk(res))
  }, [])
  if (!token || !AuthenticationUtils.isTokenValid(token)) return <AppStack />;
  return (<AppStackAuthenticated />);
};

export default Routes;