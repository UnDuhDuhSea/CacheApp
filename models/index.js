const User = require('./User');
const Budget = require('./Budget');

// Define sequelize associations in this file.

User.hasMany(Budget, {
  foreignKey: 'user_id',
});

Budget.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Budget };
