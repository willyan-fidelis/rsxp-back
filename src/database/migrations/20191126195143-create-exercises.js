module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Exercises', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      min_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('Exercises');
  },
};
