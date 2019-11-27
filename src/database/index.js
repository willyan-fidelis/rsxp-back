import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Exercise from '../app/models/Exercise';

const models = [Exercise];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
  }
}

export default new Database();
