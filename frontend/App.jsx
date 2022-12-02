import React from 'react';
import { View } from 'react-native';
import {
  AppBar, IconButton, Pressable, Text,
} from '@react-native-material/core';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

// function Leavel() {
//   return <Pressable style={{ width: 80, height: 80, backgroundColor: 'skyblue' }} />;
// }

function App() {
  const insets = useSafeAreaInsets();

  return (
    <>

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

        <Pressable
          style={{
            width: '80%', height: 80, backgroundColor: '#E7DA8E', margin: 10,
          }}

        >
          <Text>Junior</Text>
        </Pressable>
        <Pressable
          style={{
            width: '80%', height: 80, backgroundColor: '#E7DA8E', margin: 10,
          }}

        >
          <Text>middle</Text>
        </Pressable>
        <Pressable
          style={{
            width: '80%', height: 80, backgroundColor: '#E7DA8E', margin: 10,
          }}

        >
          <Text>Senior</Text>
        </Pressable>
      </View>
      {/* <View>
        <Leavel />
      </View> */}
    </>
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
