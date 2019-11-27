import Sequelize, { Model } from 'sequelize';

class Exercise extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        url: Sequelize.STRING,
        min_age: Sequelize.INTEGER,
        max_age: Sequelize.INTEGER,
        subject: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'Exercises'
      }
    );
    return this;
  }
}

export default Exercise;
