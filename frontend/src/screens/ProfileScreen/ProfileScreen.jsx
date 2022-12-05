import React, { useContext } from 'react';
import { View } from 'react-native';
import Profile from '../../components/Profile/Profile';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

function ProfileScreen() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <Profile />
    </View>
  );
}

export default ProfileScreen;
