const { Talk } = require('../models');

const talkData = [
    {
        "name": "MVC Structure and why it's Important",
        "description": "Learn about the MVC Structure and why it is important when organizing your files in a project.",
        "date": "July 3, 2023 at 2pm in the Main Hall",
        "user_id": 1
    },
    {
        "name": "Continuing to learn about the Basics",
        "description": "Its always good to keep practicing and learning about the basics of coding, this talk covers the basics of HTML, CSS and JavaScript.",
        "date": "July 3, 2023 at 4pm in the East Hall",
        "user_id": 2
    },
    {
        "name": "The future with AI",
        "description": "AI is growing in popularity and we will discuss the future working with AI from Security to Fun!",
        "date": "July 3, 2023 at 6pm in the Main Hall",
        "user_id": 3
    },
    {
        "name": "How to keep your mind and body healthy while coding.",
        "description": "Coding takes a toll on your mind and body, this talk discusses best practices on how to keep healthy while sitting and staring at a computer.",
        "date": "July 4, 2023 at 2pm in the Main Hall",
        "user_id": 4
    },
    {
        "name": "How to debug for beginners",
        "description": "Coding always comes with obstacles, here we will discuss the best practices for debugging when your program is not working.",
        "date": "July 4, 2023 at 4pm in the West Hall",
        "user_id": 5
    }
];

const seedTalk = () => Talk.bulkCreate(talkData);

module.exports = seedTalk;