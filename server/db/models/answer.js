const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  Answer.init({
    title: DataTypes.STRING,
    question_id: DataTypes.INTEGER,
    isCorrect: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
