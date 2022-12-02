import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from '@react-native-material/core';
import { EventRegister } from 'react-native-event-listeners';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import themeContext from './src/ThemeContext/themeContext';
import theme from './src/ThemeContext/Theme';
import LevelsScreen from './src/screens/LevelsScreen/LevelsScreen';
import Question from './src/components/Game/Question';
import MainScreen from './src/screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      'changeTheme',
      (data) => {
        setMode(data);
      },
    );
    return () => {
      EventRegister.removeAllListeners(eventListener);
    };
  });

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <AppBar
          style={{
            paddingTop: insets.top,
          }}
          title="JSlearner"
          centerTitle
          color="primary"
        />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Lev" component={LevelsScreen} />
          <Stack.Screen name="Que" component={Question} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

function AppProvider() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

export default AppProvider;
