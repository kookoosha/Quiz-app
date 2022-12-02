import React from 'react';
import { View } from 'react-native';
import {
  AppBar, Button, IconButton, Pressable, Stack, Text, TextInput,
} from '@react-native-material/core';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

// function Leavel() {
//   return <Pressable style={{ width: 80, height: 80, backgroundColor: 'skyblue' }} />;
// }

function App() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <AppBar
        variant="bottom"
        title="JS-Learner"
        centerTitle
        style={{
          paddingTop: insets.top, backgroundColor: 'gray',
        }}
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <IconButton
            icon={(props) => <Icon name="magnify" {...props} />}
            {...props}
          />
        )}
      />

      <Stack spacing={2} style={{ margin: 16 }}>
        <TextInput
          label="Вопрос"
        />
        <TextInput
          label="Правильный ответ"
        />
        <TextInput
          label="Ответ 2"
        />
        <TextInput
          label="Ответ 3"
        />
        <TextInput
          label="Ответ 4"
        />
        <TextInput
          label="Код, при необходимости"
        />
        <Button title="записать вопрос" />
      </Stack>

    </View>
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
