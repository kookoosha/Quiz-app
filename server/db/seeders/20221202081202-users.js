/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Денис',
        game_result: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Настя',
        game_result: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ваня',
        game_result: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Антон',
        game_result: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
