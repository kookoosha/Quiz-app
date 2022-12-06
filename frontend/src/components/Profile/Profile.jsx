import React from 'react';
import { Avatar, Button, Icon } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../screens/MainScreen/mainScreen';
import theme from '../../ThemeContext/Theme';
import { logoutUser } from '../../../redux/actions/userActions';

function Profile() {
  const user = useSelector((store) => store.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor, marginBottom: 150 }]}>
      <Avatar
        // icon={(user) => <Icon name="account" {...user?.avatar} />}
        icon={(props) => <Icon name="account" {...props} />}
        label="Java Script"
        color="primary"
        size={110}
      />
      <Text>{user?.name}</Text>
      <Text>Ваш очки:</Text>
      <Button style={{ marginTop: 30 }} title="Добавить вопрос" onPress={() => navigation.navigate('AddQuestion')} />
      <Button style={{ marginTop: 30 }} title="Выход" onPress={logoutHandler} />
    </View>
  );
}

export default Profile;
