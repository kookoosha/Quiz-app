import { Button, ListItem } from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);
  const [currQuestion, setCurrentQuestion] = useState(question[0] || {});
  const route = useRoute();
  const { itemId, otherParam } = route.params;
  console.log('-------------', question);

  useEffect(() => {
    dispatch(getQuestions(itemId));
    return () => dispatch(emptyQuestion());
  }, []);
  useEffect(() => {
    setCurrentQuestion(question[0]);
  }, [question]);
  return (

    <View>
      <ListItem title={currQuestion?.title} />
      <Button onPress={() => setCurrentQuestion((prev) => question[question.indexOf(prev) + 1])} title="Next" color="#d4ac2d" />
    </View>
  );
}
