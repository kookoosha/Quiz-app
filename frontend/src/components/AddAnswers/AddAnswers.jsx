import React, { useContext, useState } from 'react';
import {
  Alert, ScrollView, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../ThemeContext/themeContext';
// import { addQuestion } from '../../../redux/actions/questionAction';

export default function AddAnswers() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [load, setLoad] = useState(false);

  const submitHandler = async () => {
    console.log(inputs);
    if (inputs.title !== '') {
      setLoad(true);
      const response = await fetch(
        'http://192.168.1.243:3001/addAnswers',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs),
        },
      ).then(() => navigation.navigate('Profile'));
      dispatch(inputs);
      if (load === false) {
        navigation.goBack();
        Alert.alert('Ошибка соединения');
      } else { Alert.alert('Заполните все поля'); }
    }
  };

  return (
    <ScrollView>
      <View style={{
        backgroundColor: 'primary', flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text style={{ color: theme.color }}>Правильный ответ</Text>
        <TextInput
          style={{ marginTop: 15, marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(data) => {
            setInputs((prev) => ({ ...prev, rightAnswer: data }));
          }}
        />
        <Text style={{ color: theme.color }}>Другой вариант ответа</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(data) => {
            setInputs((prev) => ({ ...prev, answer1: data })); // answer1: data
          }}
        />
        <Text style={{ color: theme.color }}>Ещё один ответ</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(data) => {
            setInputs((prev) => ({ ...prev, answer2: data })); // answer2: data
          }}
        />
        <Text style={{ color: theme.color }}>Последний ответ</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(data) => {
            setInputs((prev) => ({ ...prev, answer3: data })); // answer3: data
          }}
        />
        <Button
          style={{ marginBottom: 15 }}
          title="Добавить"
          onPress={() => {
            submitHandler();
            if (load) {
              navigation.navigate('Profile');
            }
          }}
        />
        <Button style={{ marginBottom: 5 }} title="Отмена" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
}
