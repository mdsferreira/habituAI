import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Initial from './pages/initial';

function App(): React.JSX.Element {
  const isDarkMode = true;



  return (
    <SafeAreaView >
      <StatusBar />
      <View>
        <Initial />
      </View>
    </SafeAreaView>
  );
}

export default App;
