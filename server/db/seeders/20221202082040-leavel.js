/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [
      {
        name: 'Junior',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Middle',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Senior',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};
