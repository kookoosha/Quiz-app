import {
  Stack, Button, ListItem, Icon,
} from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground, Pressable, Text, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import OneQuestion from './OneQuestion';
import { getAnswers, setAnswers } from '../../../redux/actions/answersAction';
import {
  emptyScore, getScore, setScore, updateScore,
} from '../../../redux/actions/scoreAction';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);
  const answers = useSelector((s) => s.answers);
  const score = useSelector((s) => s.score);
  const [currQuestion, setCurrentQuestion] = useState(question[0] || {});
  const route = useRoute();
  const { itemId, otherParam } = route.params;
  const [activ, setActiv] = useState(null);
  // const [color, setColor] = useState(false);
  const [counter, setCounter] = useState(1);
  console.log('scooooore', score);

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

  // console.log('currQ', currQuestion);
  // console.log('Answers on front', answers);

  useEffect(() => {
    dispatch(getAnswers(currQuestion?.id));
  }, [currQuestion]);

  const image = { uri: 'https://i.pinimg.com/originals/ce/fd/bb/cefdbb470cf74f3857f5eb8458c3a17e.jpg' };

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
        {Array.isArray(score) && score?.map((el) => (

          // <View key={el.id}>
          //   {el === null && score.map((el) => <Icon name="lightbulb" size={20} color="gray" />)}
          //   {el === true && <Icon name="lightbulb" size={20} color="#19a600" />}
          //   {el === false && <Icon name="lightbulb" size={20} color="red" />}
          // </View>
          <Icon
            name="lightbulb"
            size={20}
            color={
            el === null ? 'gray' : el ? '#19a600' : 'red'
          }
          />
        ))}
      </View>

      <Text style={{ textAlign: 'center', fontSize: 18 }}>
        {
        !answers.length ? 'End' : `Вопрос № ${counter}`

      }

      </Text>

      <View style={{ width: '100%' }}>
        <View style={{
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

          </View>
        </View>
      </View>
      {activ && <Text>{`Количество правильных ответов:${JSON.stringify(score)}`}</Text>}

      {/* Здесь закончилась отрисовка и логика вопроса */}
      <View fill center spacing={4}>
        {/* {answers?.map((el) => (
          <ImageBackground style={{ borderRadius: 30, margin: 10 }} source={image} resizeMode="cover">
            <View
              key={el.id}
              style={{

                borderColor: 'black',
                width: '80%',
                marginBottom: 3,
                fontSize: 20,
              }}
            >
              <Button
                onPress={() => {
                  dispatch(setScore(el?.isCorrect));
                  setColor(el?.isCorrect);
                  setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
                  setCounter((prev) => prev + 1);
                }}
                variant="outlined"
                title={`${el.title}`}
                color="black"
                tintColor="black"
                pressableContainerStyle="red"
                style={{ padding: 20, borderRadius: 50 }}
              />
            </View>
          </ImageBackground>

        ))} */}

        {answers?.map((el) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >

            <Pressable
              onPress={() => {
                const index = question.findIndex((quest) => quest.id === currQuestion.id);
                dispatch(updateScore({
                  index,
                  value: el?.isCorrect,
                }));
                // setColor(el?.isCorrect);
                setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
                setCounter((prev) => prev + 1);
              }}
              style={{
                width: '80%', backgroundColor: '#FFD700', borderRadius: 30, marginBottom: 20,
              }}
              pressEffectColor="red"
            >
              <Text style={{ color: 'black', padding: 25, fontSize: 20 }}>
                {el.title}
              </Text>

            </Pressable>

          </View>
        ))}

      </View>

      {!currQuestion && !activ && <Button style={{ padding: 20 }} onPress={() => { dispatch(getScore()); setActiv(true); }} title="Закончить тестирование" color="#d4ac2d" />}
      {currQuestion && (
        <View style={{
          alignItems: 'flex-end',

        }}
        >
          <Pressable
            style={{
              padding: 20, width: '50%', marginRight: 10,
            }}
            onPress={() => {
              setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
              setCounter((prev) => prev + 1);
            }}
          >
            <Text>Пропустить вопрос</Text>
          </Pressable>
        </View>
      )}

    </View>

  );
}
