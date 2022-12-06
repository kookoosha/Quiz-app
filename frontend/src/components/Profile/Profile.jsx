/* eslint-disable react/no-unstable-nested-components */
import { Avatar, Button, Icon } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../screens/MainScreen/mainScreen';
import theme from '../../ThemeContext/Theme';

function Profile() {
  const user = useSelector((store) => store.user);
  const navigation = useNavigation();
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor, marginBottom: 150 }]}>
      <Avatar
        // icon={(user) => <Icon name="account" {...user?.avatar} />}
        icon={(props) => <Icon name="account" {...props} />}
        label="Shakal"
        image={{ uri: user?.avatar_url }}
        color="primary"
        size={110}
      />
      <Text>{user?.name}</Text>
      <Text>Ваши очки:</Text>
      <Button style={{ marginTop: 30 }} title="Добавить вопрос" onPress={() => navigation.navigate('AddQuestion')} />
    </View>
  );
}

export default Profile;
