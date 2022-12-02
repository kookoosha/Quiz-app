import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from '@react-native-material/core';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/ThemeContext/themeContext';
import theme from './src/ThemeContext/Theme';
import MainScreen from './src/screens/MainScreen/MainScreen';
import LevelsScreen from './src/screens/LevelsScreen/LevelsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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
        <AppBar title="JSlearner" centerTitle color="primary" />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Lev" component={LevelsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
