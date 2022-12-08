import {
  Stack, Button, ListItem, Icon,
} from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  Dimensions,
  ImageBackground, Pressable, ScrollView, Text, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PieChart } from 'react-native-chart-kit';
import { getLevels } from '../../../redux/actions/levelsActions';
import { emptyQuestion, getQuestions } from '../../../redux/actions/questionAction';
import { getAnswers, setAnswers } from '../../../redux/actions/answersAction';
import {
  emptyScore, getScore, setScore, updateScore,
} from '../../../redux/actions/scoreAction';
import themeContext from '../../ThemeContext/themeContext';

export default function Question() {
  const dispatch = useDispatch();
  const question = useSelector((s) => s.question);
  const answers = useSelector((s) => s.answers);
  const score = useSelector((s) => s.score);
  const [currQuestion, setCurrentQuestion] = useState(question[0] || {});
  const route = useRoute();
  const { itemId, otherParam } = route.params;
  const [activ, setActiv] = useState(null);
  const [counter, setCounter] = useState(1);
  const theme = useContext(themeContext);
  console.log('scooooore', score);

  let falsQuestion;
  if (!score.length) {
    falsQuestion = question.length - score;
  }
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

  useEffect(() => {
    dispatch(getAnswers(currQuestion?.id));
  }, [currQuestion]);

  const image = { uri: 'https://i.pinimg.com/originals/ce/fd/bb/cefdbb470cf74f3857f5eb8458c3a17e.jpg' };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const screenWidth = Dimensions.get('window').width;
  return (

    <ScrollView style={{ backgroundColor: theme.backgroundColor }}>
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
          <Icon
            name="lightbulb"
            size={20}
            color={
            el === null ? 'gray' : el ? '#19a600' : 'red'
          }
          />
        ))}
      </View>
      <Text style={{ textAlign: 'center', fontSize: 18, color: theme.color }}>
        {
        !answers.length ? ' ' : `Вопрос № ${counter}`
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
              style={{
                alignItems: 'center', fontSize: 24, padding: 10, color: theme.color,
              }}
            >
              {currQuestion?.title}
            </Text>
          </View>
        </View>
      </View>
      {/* {activ && <Text>{`Количество правильных ответов:${JSON.stringify(score)}`}</Text>} */}

      {/* Здесь закончилась отрисовка и логика вопроса */}
      <View fill center spacing={4}>
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
      {!currQuestion && !activ && <Pressable onPress={dispatch(getScore())} /> }

      {!currQuestion && !activ && (typeof score === 'number') && (
        <View>
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            color: theme.color,
          }}
          >
            {`Количество правильных ответов: ${JSON.stringify(score)} / ${falsQuestion} `}

          </Text>
          <PieChart
            data={
              [

                {
                  name: 'Верно',
                  population: score,
                  color: '#19a600',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
                {
                  name: 'Неверно',
                  population: falsQuestion,
                  color: 'red',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },

              ]
            }
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="30"
            absolute
          />
        </View>
      ) }
      {currQuestion && (
        <View style={{
          alignItems: 'flex-end',
        }}
        >
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => {
              setCurrentQuestion((prev) => question[question.indexOf(prev) + 1]);
              setCounter((prev) => prev + 1);
            }}
          >
            <Text style={{
              marginTop: 20, fontSize: 14, textDecorationLine: 'underline', color: theme.color,
            }}
            >
              ПРОПУСТИТЬ ВОПРОС
            </Text>

          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}
