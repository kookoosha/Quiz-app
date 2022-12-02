/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        title: 'Джун: Для чего нужен Node.js?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Джун: Что такое npm?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Джун: Как создать приложение Node.js с нуля?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мидл: Что такое стек вызовов и является ли он частью движка V8?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мидл: Что такое цикл событий? Является ли он частью движка V8?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: ' Мидл: Помимо движка V8 и библиотеки libuv, какие ещё внешние зависимости есть у Node?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сеньор: Почему в модулях переменные верхнего уровня не являются глобальными?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сеньор: В чём разница между module.exports и exports?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: ' Сеньор: Можно ли запустить процесс Node без V8?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
