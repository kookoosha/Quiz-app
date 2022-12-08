import React, { useContext } from 'react';
import { View } from 'react-native';
import AddAnswers from '../../components/AddAnswers/AddAnswers';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

function AddAnswerScreen() {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <AddAnswers />
    </View>
  );
}

export default AddAnswerScreen;
