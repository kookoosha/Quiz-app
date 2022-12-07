import React, { useState } from 'react';
import {
  Alert, ScrollView, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { addQuestion } from '../../../redux/actions/questionAction';

export default function AddAnswers() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '',
  });
  const [load, setLoad] = useState(false);

  const submitHandler = async () => {
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
      );
      dispatch(inputs);
      if (response.ok) {
        // navigation.navigate('AddAnswers');
        // Alert.alert('Вопрос добавлен!');
      } else {
        setLoad(false);
        navigation.goBack();
        Alert.alert('Ошибка соединения');
      }
    } else { Alert.alert('Заполните все поля'); }
  };

  return (
    <ScrollView>
      <View style={{
        backgroundColor: 'primary', flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text>Правильный ответ</Text>
        <TextInput
          style={{ marginTop: 15, marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title }));
          }}
        />
        <Text>Другой вариант ответа</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title })); // answer1: data
          }}
        />
        <Text>Ещё один ответ</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title })); // answer2: data
          }}
        />
        <Text>Последний ответ</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title })); // answer3: data
          }}
        />
        <Button style={{ marginBottom: 15 }} title="Добавить" onPress={() => { submitHandler(); navigation.navigate('Profile'); }} />
        <Button style={{ marginBottom: 5 }} title="Отмена" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
}
