const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Question }) {
      // this.belongsTo(User, { foreignKey: 'user_id' });
      // this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  Entries.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Entries',
  });
  return Entries;
};
