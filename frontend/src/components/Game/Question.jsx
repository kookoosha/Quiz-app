import { Button, ListItem } from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';
import { getAnswers, setAnswers } from '../../../redux/actions/answersAction';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);
  const answers = useSelector((s) => s.answers);
  const [currQuestion, setCurrentQuestion] = useState(question[0] || {});
  const route = useRoute();
  const { itemId, otherParam } = route.params;

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
      {answers?.map((el) => (
        <BouncyCheckbox
          size={25}
          fillColor="Gray"
          text={el.title}
        />
      ))}
      <BouncyCheckbox
        size={25}
        fillColor="Gray"
        text="вопрос"

      />
      <Button onPress={() => setCurrentQuestion((prev) => question[question.indexOf(prev) + 1])} title="Next" color="#d4ac2d" />
    </View>
  );
}
