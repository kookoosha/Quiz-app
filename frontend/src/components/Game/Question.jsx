import { Stack, Button, ListItem } from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';
import { getAnswers, setAnswers } from '../../../redux/actions/answersAction';
import { getScore, setScore } from '../../../redux/actions/scoreAction';

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

  useEffect(() => {
    dispatch(getQuestions(itemId));
    return () => dispatch(emptyQuestion());
  }, []);

  useEffect(() => {
    setCurrentQuestion(question[0]);
  }, [question]);

  console.log('currQ', currQuestion);
  console.log('Answers on front', answers);

  useEffect(() => {
    dispatch(getAnswers(currQuestion?.id));
  }, [currQuestion]);

  return (

    <View>
      <ListItem title={currQuestion?.title} />

      <View fill center spacing={4}>
        {answers?.map((el) => (
          <View key={el.id} style={{ marginBottom: 3 }}>
            <Button
              onPress={() => {
                dispatch(setScore(el?.isCorrect));
                setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
              }}
              uppercase={false}
              variant="Button"
              title={el.title}
              color="#f5c542"
            />
          </View>
        ))}
      </View>

      {!currQuestion && !activ && <Button onPress={() => { dispatch(getScore()); setActiv(true); }} title="Закончить тестирование" color="#d4ac2d" />}
      {activ && <Text>{`Количество правильных ответов:${JSON.stringify(score)}`}</Text>}
    </View>
  );
}
