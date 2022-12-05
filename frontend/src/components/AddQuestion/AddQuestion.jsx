import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { addQuestion } from '../../../redux/actions/questionAction';

export default function AddQuestion() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '', img: '', code: '', level_id: '',
  });
  const [load, setLoad] = useState(false);

  const submitHandler = async () => {
    if (inputs.title !== '' && inputs.text !== '') {
      setLoad(true);
      const responce = await fetch(
        `https://js-helper.herokuapp.com/posts/${auth?.id}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs),
        },
      );
      setInputs({
        title: '', img: '', code: '', level_id: '',
      });
      if (responce.ok) {
        const data = await responce.json();
        dispatch(addQuestion(data));
        setLoad(false);
      } else {
        setLoad(false);
        Alert.alert('Ошибка соединения');
      }
    } else { Alert.alert('Заполните все поля'); }
  };

  return (
    <View>
      <View style={{
        backgroundColor: 'primary', flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text>Заголовок</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          // placeholder="Заголовок"
          onChange={(title) => setInputs({ ...inputs, title })}
        />
        <Text>URL-адрес изображения</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          // placeholder="содержание"
          onChange={(img) => setInputs({ ...inputs, img })}
        />
        <Text>Код</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          // placeholder="содержание"
          onChange={(code) => setInputs({ ...inputs, code })}
        />
        <Text>ID уровня</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200 }}
          variant="standard"
          // placeholder="содержание"
          // eslint-disable-next-line camelcase
          onChange={(level_id) => setInputs({ ...inputs, level_id })}
        />
        <Button style={{ marginBottom: 15 }} title="Выложить" onPress={submitHandler} />
        <Button style={{ marginBottom: 5 }} title="Отмена" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  );
}
