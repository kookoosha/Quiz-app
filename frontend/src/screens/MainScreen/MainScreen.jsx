/* eslint-disable consistent-return */
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import {
  Image, StatusBar, Text, View,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Switch } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../../ThemeContext/themeContext';
import styles from './mainScreen';
import { setUser } from '../../../redux/actions/userActions';

export default function MainScreen() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const user = useSelector((store) => store.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return dispatch(setUser(jsonValue != null ? JSON.parse(jsonValue) : null));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // const storageUser = getData();
    // console.log('jvhgfhfgfcgfcchgfchg', storageUser);
    // if (storageUser) {
    //   dispatch(setUser(storageUser));
    // }
    getData();
    console.log('user local', user);
  }, []);

  return (

    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <StatusBar />
      <Image style={[styles.logo]} source={require('./logo.png')} />
      <Text style={[styles.mainText, { color: theme.color }]}>JuSt do it!</Text>
      <View>
        {!(user?.login) ? (
          <View>
            <Button style={{ marginBottom: 30 }} title="Авторизация" onPress={() => navigation.navigate('GitHubAuth')} />
          </View>

        ) : (
          <View>
            <Button style={{ marginBottom: 30 }} title="Профиль" onPress={() => navigation.navigate('Profile')} />
            <Button style={{ marginBottom: 30 }} title="Новый тест" onPress={() => navigation.navigate('Level')} />
            <Button style={{ marginBottom: 30 }} title="Учебник JS" onPress={() => navigation.navigate('Textbook')} />
          </View>

        )}
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
