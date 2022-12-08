/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import { Avatar, Button, Icon } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../screens/MainScreen/mainScreen';
import { setUser } from '../../../redux/actions/userActions';
import themeContext from '../../ThemeContext/themeContext';
// import { logoutUser } from '../../../redux/actions/userActions';

function Profile({ navigate }) {
  const user = useSelector((store) => store.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useContext(themeContext);

  const logoutHandler = () => {
    AsyncStorage.clear();
    dispatch(setUser({}));
    navigation.navigate('Main');
  };
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor, marginBottom: 150 }]}>
      <Avatar
        icon={(props) => <Icon name="account" {...props} />}
        label="Java Script"
        image={{ uri: user?.avatar_url }}
        color="primary"
        size={130}
      />
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.color }}>

        {user?.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.color }}>

        {user?.login}
      </Text>
      <Button style={{ marginTop: 30 }} title="Профиль GitHub" onPress={() => Linking.openURL(user?.html_url)} />
      <Button style={{ marginTop: 30 }} title="Добавить вопрос" onPress={() => navigation.navigate('AddQuestion')} />
      <Button style={{ marginTop: 30 }} title="Выход" onPress={logoutHandler} />
    </View>
  );
}

export default Profile;
