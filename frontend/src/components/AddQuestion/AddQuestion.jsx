import React, { useState } from 'react';
import {
  Alert, ScrollView, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
// import { addQuestion } from '../../../redux/actions/questionAction';

export default function AddQuestion() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '', img: '', code: '', level_id: '',
  });
  const [load, setLoad] = useState(false);

  const submitHandler = async () => {
    if (inputs.title !== '' && inputs.img !== '' && inputs.code !== '' && inputs.level_id !== '') {
      setLoad(true);
      const response = await fetch(
        'http://192.168.1.243:3001/addQuestion',
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
        <Text>Заголовок</Text>
        <TextInput
          style={{ marginTop: 15, marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title }));
          }}
        />
        <Text>URL-адрес изображения</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(img) => {
            setInputs((prev) => ({ ...prev, img }));
          }}
        />
        <Text>Код</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(code) => {
            setInputs((prev) => ({ ...prev, code }));
          }}
        />
        <Text>ID уровня</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          onChangeText={(level_id) => {
            setInputs((prev) => ({ ...prev, level_id }));
          }}
        />
        <Button style={{ marginBottom: 15 }} title="Далее" onPress={() => { submitHandler(); navigation.navigate('AddAnswers'); }} />
        <Button style={{ marginBottom: 5 }} title="Отмена" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
}
