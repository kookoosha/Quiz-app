/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // 1
      {
        title: 'Конструкция, что выполняет код несколько раз',
        question_id: 1,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Конструкция для создания определенной переменной',
        question_id: 1,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Оператор сравнения значений',
        question_id: 1,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2
      {
        title: 'var num = "STRING"',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var isDone = 0',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var b = false',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var number = 12,5',
        question_id: 2,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3
      {
        title: 'Только числа и строки',
        question_id: 3,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Строки, числа с точкой и простые числа',
        question_id: 3,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Строки, числа с точкой, простые числа и булевые выражения',
        question_id: 3,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4
      {
        title: 'Веб-приложения',
        question_id: 4,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Прикладное программное обеспечение',
        question_id: 4,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мобильные приложения',
        question_id: 4,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Можно во всех перечисленных',
        question_id: 4,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 5
      {
        title: 'Они ничем не отличаются',
        question_id: 5,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
        question_id: 5,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением',
        question_id: 5,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 6
      {
        title: '"Yes"',
        question_id: 6,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'a',
        question_id: 6,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '5',
        question_id: 6,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '"No" ',
        question_id: 6,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 7
      {
        title: 'Они ничем не отличаются',
        question_id: 7,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
        question_id: 7,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением',
        question_id: 7,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 8
      {
        title: 'Число 10',
        question_id: 8,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Значение пустой строки',
        question_id: 8,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Значение undefined',
        question_id: 8,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Значение Nan',
        question_id: 8,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 9
      {
        title: 'var 2num',
        question_id: 9,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var num',
        question_id: 9,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var num-1',
        question_id: 9,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'var num_1',
        question_id: 9,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 10
      {
        title: 'for, forMap, foreach, while',
        question_id: 10,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'for, while, do while',
        question_id: 10,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'for, forMap, foreach, while, do while',
        question_id: 10,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'for, while, do while, foreach',
        question_id: 10,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 11
      {
        title: 'Выполняет работу с сервером',
        question_id: 11,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Создает разметку на странице сайта',
        question_id: 11,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Отвечает за работу с базами данных',
        question_id: 11,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Отвечает за функции на стороне клиента',
        question_id: 11,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 12
      {
        title: 'new alert ("Hi")',
        question_id: 12,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'info ("Hi")',
        question_id: 12,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нет верных вариантов',
        question_id: 12,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'alert ("Hi")',
        question_id: 12,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 13
      {
        title: 'Необходима точка с запятой после console.log("Hi!")',
        question_id: 13,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Запись console.log необходимо прописывать лишь в отдельных файлах',
        question_id: 13,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Неверно записан атрибут type',
        question_id: 13,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 14
      {
        title: 'documentWrite("Hello")',
        question_id: 14,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'print(Hello)',
        question_id: 14,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'write("Hello")',
        question_id: 14,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'console.log("Hello")',
        question_id: 14,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 15
      {
        title: '5',
        question_id: 15,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Такой цикл работать не будет',
        question_id: 15,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '15',
        question_id: 15,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '25',
        question_id: 15,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
