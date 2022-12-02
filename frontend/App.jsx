import React from 'react';
import { View } from 'react-native';
import {
  AppBar, IconButton, Pressable, Text,
} from '@react-native-material/core';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
function App() {
  const insets = useSafeAreaInsets();
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
