import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
// import styled from 'styled-components/native';
import Levels from './src/components/Levels/Levels';

export default function App() {
  return (
    <View>
      <StatusBar theme="auto" />
      <Text>Hello world!</Text>
      <Levels />
    </View>
  );
}
