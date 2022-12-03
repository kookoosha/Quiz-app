import { Button, ListItem } from '@react-native-material/core';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);

  return (
    // <View>
    //   <OneQuestion question={question} />
    // </View>
    <View>
      <ListItem title="List Item" />
      <Button onPress={() => dispatch(getQuestions())} variant="outlined" title="Next" color="#d4ac2d" />
    </View>
  );
}
