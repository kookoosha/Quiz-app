import React, { useContext } from 'react';
import { View } from 'react-native';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

function AddQuestionScreen() {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <AddQuestion />
    </View>
  );
}

export default AddQuestionScreen;
