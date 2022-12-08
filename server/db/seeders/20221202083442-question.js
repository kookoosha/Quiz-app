/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // junior
      // 1
      {
        title: 'Что такое условный оператор?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2
      {
        title: 'Какая переменная записана неверно?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3
      {
        title: 'Какие значения можно хранить в переменных?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4
      {
        title: 'Где можно использовать JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 5
      {
        title: 'В чем разница между confirm и prompt?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 6
      {
        title: 'Что будет записано в переменную test? var a = 5; var test = 5 != a ? "Yes" : "No";',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 7
      {
        title: 'В чем разница между confirm и prompt?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 8
      {
        title: 'Что будет выведено в консоль? var b = 10 if (b % 3 == 0) { var i = 10; } console.log(i);',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 9
      {
        title: 'Где верно указано имя переменной?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 10
      {
        title: 'Какие циклы есть в языке JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 11
      {
        title: 'Какие функции выполняет Node JS?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 12
      {
        title: 'Где верно указан запуск всплывающего окна?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 13
      {
        title: 'Почему код ниже не будет работать? <script type="javascript/text"> console.log("Hi!") </script>',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 14
      {
        title: 'Где верно указан вывод данных?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 15
      {
        title: 'Какое количество сообщений будет выведено в консоль? for(var i = 10; i < 35; i += 5) { console.log(i); }',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // middle

      // 1
      {
        title: '',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2
      {
        title: '',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
