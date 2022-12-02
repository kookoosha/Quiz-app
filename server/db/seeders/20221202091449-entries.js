/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [
      {
        user_id: 1,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  },
};
