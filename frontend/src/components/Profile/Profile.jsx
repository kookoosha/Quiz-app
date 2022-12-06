/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Avatar, Button, Icon } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../screens/MainScreen/mainScreen';
import theme from '../../ThemeContext/Theme';
import { setUser } from '../../../redux/actions/userActions';
// import { logoutUser } from '../../../redux/actions/userActions';

function Profile({ navigate }) {
  const user = useSelector((store) => store.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AsyncStorage.clear();
    dispatch(setUser({}));
    navigation.navigate('Main');
  };
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor, marginBottom: 150 }]}>
      <Avatar
        // icon={(user) => <Icon name="account" {...user?.avatar} />}
        icon={(props) => <Icon name="account" {...props} />}
        label="Java Script"
        image={{ uri: user?.avatar_url }}
        color="primary"
        size={110}
      />
      <Text>{user?.name}</Text>
      <Text>Ваши очки:</Text>
      <Button style={{ marginTop: 30 }} title="Добавить вопрос" onPress={() => navigation.navigate('AddQuestion')} />
      <Button style={{ marginTop: 30 }} title="Выход" onPress={logoutHandler} />
    </View>
  );
}

export default Profile;
