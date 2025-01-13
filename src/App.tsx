import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@/context/ThemeContext';
import Routes from '@/config/routes';
import { Provider } from 'react-redux';
import store from '@/config/store';
import ErrorBoundary from '@/components/error';
import { setupGlobalErrorHandler } from '@/utils/globalErrorHandler';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

function App(): React.JSX.Element {

  const onAppLoading = async () => {
    setupGlobalErrorHandler();
  }

  useEffect(() => {
    onAppLoading()
  }, [])

  return (
    <GluestackUIProvider>
      <Provider store={store}>
        <NavigationContainer>
          <ThemeProvider >
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </ThemeProvider>
        </NavigationContainer>
      </Provider>
    </GluestackUIProvider>
  );
}

export default App;
