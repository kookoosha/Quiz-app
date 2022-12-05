import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from '@react-native-material/core';
import { EventRegister } from 'react-native-event-listeners';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import axios from 'axios';
import themeContext from './src/ThemeContext/themeContext';
import theme from './src/ThemeContext/Theme';
import Question from './src/components/Game/Question';
import store from './redux/store';
import MainScreen from './src/screens/MainScreen/MainScreen';
import LevelsScreen from './src/screens/LevelsScreen/LevelsScreen';
import TextBookScreen from './src/screens/TextBook/TextBookScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import AddQuestionScreen from './src/screens/AddQuestionScreen/AddQuestionScreen';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

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
            paddingTop: insets.top, backgroundColor: '#FFD700',
          }}
          title="JS Learner"
          tintColor="black"
          centerTitle
          color="primary"
        />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Level" component={LevelsScreen} />
          <Stack.Screen name="Que" component={Question} />
          <Stack.Screen name="Textbook" component={TextBookScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="AddQuestion" component={AddQuestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

function AppProvider() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
}

export default AppProvider;
