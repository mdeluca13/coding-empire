// Calling all seeding functions
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedTalk = require('./talkData');
const seedAttend = require('./attendData');
const seedQuestion = require('./questionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedTalk();

  await seedAttend();

  await seedQuestion();
  
  process.exit(0);

};

seedAll();
