import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from '@react-native-material/core';
import LevelsScreen from './screens/LevelsScreen';

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppBar title="JSlearner" centerTitle color="primary" />
      <Stack.Navigator>
        <Stack.Screen name="Выбери свой уроваень" component={LevelsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


function AppProvider() {
  return (
    <SafeAreaProvider>
      <App />

    </SafeAreaProvider>
  );
}

export default AppProvider;
