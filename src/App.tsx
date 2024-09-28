import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './context/ThemeContext';
import Routes from './config/routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider >
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
