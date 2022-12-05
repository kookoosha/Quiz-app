import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

export default function TextBookScreen() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.btnText, { color: theme.color }]}>
        Выберете тему
      </Text>

    </View>
  );
}
