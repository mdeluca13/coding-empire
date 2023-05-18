const { Attend } = require('../models');

const attendData = [
    {
        "user_id": 1,
        "talk_id": 5
    },
    {
        "user_id": 2,
        "talk_id": 4
    },
    {
        "user_id": 3,
        "talk_id": 1
    },
    {
        "user_id": 4,
        "talk_id": 3
    },
    {
        "user_id": 5,
        "talk_id": 2
    }
]

const seedAttend = () => Attend.bulkCreate(attendData);

module.exports = seedAttend;