// user data to seed
const { User } = require('../models');

const userData = [
    {
        "name": "Bob",
        "email": "bob@gmail.com",
        "password": "$2b$10$IYV9eVPVP7mrsg6.oHjviue9jai3wmFcRlwXTfChF5JiByL21a7qW"
    },
    {
        "name": "Jenny",
        "email": "jenny@gmail.com",
        "password": "$2b$10$IYV9eVPVP7mrsg6.oHjviue9jai3wmFcRlwXTfChF5JiByL21a7qW"
    },
    {
        "name": "Val",
        "email": "val@gmail.com",
        "password": "$2b$10$IYV9eVPVP7mrsg6.oHjviue9jai3wmFcRlwXTfChF5JiByL21a7qW"
    },
    {
        "name": "Buddy",
        "email": "buddy@gmail.com",
        "password": "$2b$10$IYV9eVPVP7mrsg6.oHjviue9jai3wmFcRlwXTfChF5JiByL21a7qW"
    },
    {
        "name": "Christine",
        "email": "christine@gmail.com",
        "password": "$2b$10$IYV9eVPVP7mrsg6.oHjviue9jai3wmFcRlwXTfChF5JiByL21a7qW"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;