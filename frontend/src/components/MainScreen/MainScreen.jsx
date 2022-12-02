// import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  StatusBar, Text, View, TouchableOpacity,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Switch } from 'react-native-gesture-handler';
import themeContext from '../../ThemeContext/themeContext';
import styles from './mainScreen';

export default function MainScreen() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  // const navigation = useNavigation();

  return (

    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <StatusBar />
      <Text style={styles.title}>
        JS Learner
      </Text>
      <Text style={styles.mainText}>Just Do It!</Text>
      <View style={styles.mainPageBtns}>
        <TouchableOpacity
          title=""
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.btnText}>Регистрация</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title=""
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.btnText}>Авторизация</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title=""
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.btnText}>Страница</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit('changeTheme', value);
          }}
        />
      </View>
      <Text style={[styles.btnText, { color: theme.color }]}>Темная тема</Text>
    </View>

  );
}
