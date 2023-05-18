const { Question } = require('../models');

const questionData = [
    {
        "question": "Why is the MVC Structure so important, can't my own structure work?",
        "created": "June 4, 2023",
        "user_id": 3,
        "talk_id": 1
    },
    {
        "question": "How do you have your text in the center of the screen in CSS",
        "created": "June 5, 2023",
        "user_id": 5,
        "talk_id": 2
    },
    {
        "question": "If AI is starting to be used for cyber security, couldn't it also be used for hacking?",
        "description": "June 6, 2023",
        "user_id": 4,
        "talk_id": 3
    },
    {
        "question": "How long and often should you take breaks from coding?",
        "created": "June 7, 2023",
        "user_id": 2,
        "talk_id": 4
    },
    {
        "question": "What if you do not know where to start in your debugging?",
        "created": "June 8, 2023",
        "user_id": 1,
        "talk_id": 5
    }
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;