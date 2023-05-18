// Setting relationships between Models
const User = require('./user');
const Question = require('./question');
const Talk = require('./talk');
const Attend = require('./attend')

User.hasMany(Question, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Talk, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Attend, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Talk.hasMany(Question, {
    foreignKey: 'talk_id',
    onDelete: 'CASCADE',
});

Talk.hasMany(Attend, {
    foreignKey: 'talk_id',
    onDelete: 'CASCADE',
});

Question.belongsTo(Talk, {
    foreignKey: 'talk_id',
    onDelete: 'CASCADE',
});

Question.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Attend.belongsTo(Talk, {
    foreignKey: 'talk_id',
    onDelete: 'CASCADE',
});

Attend.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Talk.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


module.exports = { User, Question, Talk, Attend };