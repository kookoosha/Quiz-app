import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from '@react-native-material/core';
import { EventRegister } from 'react-native-event-listeners';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import themeContext from './src/ThemeContext/themeContext';
import theme from './src/ThemeContext/Theme';
import LevelsScreen from './src/screens/LevelsScreen/LevelsScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';
import TextBookScreen from './src/screens/TextBook/TextBookScreen';

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
          title="JS Learner"
          centerTitle
          color="primary"
        />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Level" component={LevelsScreen} />
          <Stack.Screen name="Textbook" component={TextBookScreen} />
          {/* <Stack.Screen name="Que" component={Question} /> */}
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
