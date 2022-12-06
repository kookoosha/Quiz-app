import {
  Stack, Button, ListItem, Icon,
} from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';
import { getAnswers, setAnswers } from '../../../redux/actions/answersAction';
import { emptyScore, getScore, setScore } from '../../../redux/actions/scoreAction';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);
  const answers = useSelector((s) => s.answers);
  const score = useSelector((s) => s.score);
  const [currQuestion, setCurrentQuestion] = useState(question[0] || {});
  const route = useRoute();
  const { itemId, otherParam } = route.params;
  const [activ, setActiv] = useState(false);
  const [color, setColor] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(getQuestions(itemId));
    return () => {
      dispatch(emptyQuestion());
      dispatch(emptyScore());
    };
  }, []);

  useEffect(() => {
    setCurrentQuestion(question[0]);
  }, [question]);

  console.log('currQ', currQuestion);
  console.log('Answers on front', answers);

  useEffect(() => {
    dispatch(getAnswers(currQuestion?.id));
  }, [currQuestion]);

  const image = { uri: 'https://kartinkin.net/uploads/posts/2021-07/1627139562_29-kartinkin-com-p-fon-belo-zheltii-gradient-krasivo-30.jpg' };

  return (

    <View>

      {/* Здесь началась отрисовка и логика вопроса */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      }}
      >

        <Text>{JSON.stringify(score)}</Text>
        {Array.isArray(score) && score?.map((el) => (

          <View key={el.id}>
            {el && <Icon name="lightbulb" size={20} color="#19a600" />}
            {!el && <Icon name="lightbulb" size={20} color="red" />}
          </View>
        ))}

      </View>
      <ImageBackground source={image} resizeMode="cover">
        <View style={{ width: '100%' }}>
          <View style={{
            // marginTop: 50,
            // marginLeft: 10,
            // marginRight: 10,
            margin: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

          }}
          >

            <View>
              <Text
                style={{ alignItems: 'center', fontSize: 24, padding: 10 }}
              >
                {currQuestion?.title}

              </Text>
              {/* <ListItem title={currQuestion?.title} /> */}
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* Здесь закончилась отрисовка и логика вопроса */}
      <View fill center spacing={4}>
        {answers?.map((el) => (
          // <View style={{ backgroundColor: 'red', borderRadius: 130, margin: 10 }}>
          <ImageBackground style={{ borderRadius: 30, margin: 10 }} source={image} resizeMode="cover">
            <View key={el.id} style={{ marginBottom: 3, fontSize: 20 }}>
              <Button
                onPress={() => {
                  dispatch(setScore(el?.isCorrect));
                  setColor(el?.isCorrect);
                  setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
                }}
              // uppercase={false}
                variant="Button"
                title={`${el.title}`}
                color="black"
                style={{ padding: 20 }}
              />
            </View>
          </ImageBackground>
          // </View>
        ))}

      </View>

      {!currQuestion && !activ && <Button onPress={() => { dispatch(getScore()); }} title="Закончить тестирование" color="#d4ac2d" />}
      {currQuestion && <Button onPress={() => { setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]); }} title="Следующий вопрос" color="#d4ac2d" />}
      {activ && <Text>{`Количество правильных ответов:${JSON.stringify(score)}`}</Text>}
    </View>
  );
}
