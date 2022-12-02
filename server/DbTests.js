const {
  Level, Question, Answer, Entries,
} = require('./db/models');

const toJson = (data) => JSON.parse(JSON.stringify(data));

// все Левлы в БД
export async function allLeavels() {
  const res = await Level.findAll();
  return toJson(res);
}
// Все ответы в БД
export async function allQuestions() {
  const res = await Answer.findAll();
  return toJson(res);
}

// Все вопросы в БД
export async function allLAnswers() {
  const res = await Answer.findAll();
  return toJson(res);
}

// Все сводки (allLEntrie)
export async function allLEntrie() {
  const res = await Entries.findAll();
  return toJson(res);
}
// Левел и все вопросы к нему(надо передать id левла)
export async function leavelWithQueestions(level) {
  const res = await Question.findAll({
    where: { level_id: level },
  });
  return toJson(res);
}
// Получить все четыре ответа на конкретный вопрос (передать id вопроса)
export async function questionWithAnsvers(question) {
  const res = await Answer.findAll({
    where: { question_id: question },
  });
    //   const res = await Question.findOne({
    //     where: { id: question },
    //     include: Answer,
    //   });
  return toJson(res);
}

// Получить только правильный ответ на конкретный вопрос (передать id вопроса)
export async function questionWithRightAnsver(question) {
  const res = await Answer.findOne({
    where: { question_id: question, isCorrect: true },
  });
  return toJson(res);
}
