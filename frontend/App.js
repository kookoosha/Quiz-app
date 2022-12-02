import React, { useEffect, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/ThemeContext/themeContext';
// import { Provider } from 'react-redux';
import MainScreen from './src/components/MainScreen/MainScreen';
import theme from './src/ThemeContext/Theme';
// import store from './src/redux/store';

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
      {/* <Provider store={store}> */}
      <MainScreen />
      {/* </Provider> */}
    </themeContext.Provider>

  );
}
