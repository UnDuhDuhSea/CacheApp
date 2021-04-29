const sequelize = require('../config/connection');
// Require models

const userData = require('./userData.json');
const budgetData = require('./budgetData.json');

const seedDatabase = async () => {
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

  process.exit(0);
};

seedDatabase();
