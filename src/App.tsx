import React, { use, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './context/ThemeContext';
import Routes from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';

function App(): React.JSX.Element {

  const onAppLoading = async () => {
  }

  useEffect(() => {
    onAppLoading()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider >
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
