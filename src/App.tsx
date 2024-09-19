import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Initial from './pages/initial';
import { ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
  const isDarkMode = true;

  return (
    <ThemeProvider >
      <SafeAreaView >
        <StatusBar />
        <Initial />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
