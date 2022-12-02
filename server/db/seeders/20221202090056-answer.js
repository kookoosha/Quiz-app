/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        title: 'это так потому что так должно быть',
        question_id: 1,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 1,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 1,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 1,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это так потому что так должно быть',
        question_id: 2,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 2,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: 'это так потому что так должно быть',
        question_id: 3,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 3,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 3,
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'это НЕ так потому что так НЕ должно быть',
        question_id: 3,
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
