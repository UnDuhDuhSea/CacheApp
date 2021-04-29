const sequelize = require('../config/connection');
const { User, Budget } = require('../models');

const userData = require('./userData.json');
const budgetData = require('./budgetData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const budget of budgetData) {
      await Budget.create({
        ...budget,
      });
    }
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

seedDatabase();
