const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Level, Answer, User }) {
      this.belongsTo(Level, { foreignKey: 'level_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
      // this.hasMany(Entries, { foreignKey: 'question_id' });
      this.belongsToMany(User, { through: 'Entries', foreignKey: 'question_id' });
    }
  }
  Question.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    code: DataTypes.TEXT,
    level_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
