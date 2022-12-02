const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Entries, Question }) {
      // this.hasMany(Entries, { foreignKey: 'user_id', as: '' });
      this.belongsToMany(Question, { through: 'Entries', foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    game_result: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
