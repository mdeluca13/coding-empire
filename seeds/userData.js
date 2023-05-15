const { User } = require('../models');

const userData = [
    {
        "name": "Bob",
        "email": "bob@gmail.com",
        "password": "password"
    },
    {
        "name": "Jenny",
        "email": "jenny@gmail.com",
        "password": "password"
    },
    {
        "name": "Val",
        "email": "val@gmail.com",
        "password": "password"
    },
    {
        "name": "Buddy",
        "email": "buddy@gmail.com",
        "password": "password"
    },
    {
        "name": "Christine",
        "email": "christine@gmail.com",
        "password": "password"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;