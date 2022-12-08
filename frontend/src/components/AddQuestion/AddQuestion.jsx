import React, { useContext, useState } from 'react';
import {
  Alert, ScrollView, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../ThemeContext/themeContext';
// import { addQuestion } from '../../../redux/actions/questionAction';

export default function AddQuestion() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '', img: 'img', code: 'constresponse', level_id: '',
  });
  const [load, setLoad] = useState(false);

  const submitHandler = async () => {
    if (inputs.title !== '' && inputs.img !== '' && inputs.code !== '' && inputs.level_id !== '') {
      setLoad(true);
      const response = await fetch(
        'http://192.168.1.243:3001/addQuestion/',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs),
        },
      ).then(() => navigation.navigate('AddAnswers'));
      dispatch(inputs);
      if (response.ok) {
        navigation.navigate('AddAnswers');
      } else {
        setLoad(false);
        Alert.alert('Ошибка соединения');
      }
    } else { Alert.alert('Заполните все поля'); }
  };

  return (

    <ScrollView>
      <Text style={{
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        // textDecorationLine: 'underline',
        padding: 20,
        fontWeight: '500',
        color: theme.color,
      }}
      >
        Страница для добавления новых вопросов в базу данных JS Learner

      </Text>
      <View style={{
        backgroundColor: 'primary', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30,
      }}
      >
        <Text style={{ color: theme.color }}>Заголовок</Text>
        <TextInput
          style={{
            marginTop: 15, marginBottom: 15, width: 200, color: theme.color,
          }}
          variant="standard"
          onChangeText={(title) => {
            setInputs((prev) => ({ ...prev, title }));
          }}
        />
        {/* <Text style={{ color: theme.color }}>URL-адрес изображения</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(img) => {
            setInputs((prev) => ({ ...prev, img }));
          }}
        /> */}
        {/* <Text style={{ color: theme.color }}>Код</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(code) => {
            setInputs((prev) => ({ ...prev, code }));
          }}
        /> */}
        <Text style={{ color: theme.color }}>ID уровня</Text>
        <TextInput
          style={{ marginBottom: 15, width: 200, color: theme.color }}
          variant="standard"
          onChangeText={(level_id) => {
            setInputs((prev) => ({ ...prev, level_id }));
          }}
        />
        <Button
          style={{ marginBottom: 15 }}
          title="Далее"
          onPress={() => {
            submitHandler();
          }}
        />
        <Button style={{ marginBottom: 5 }} title="Отмена" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
}
