# coding-empire

Description:
This app is used to view talks by different speakers. The user can view any talk shown on main page and can click on those talks. 

The user has the ability to login and logout as well as signup

When clicked on a talk, user can click on the "attend the talk" button to add themselves to the attendence list. The user also has the abilty the remove themselves from the attendence list by clicking "no longer attending the talk" button. Additionally the user can ask questions as well.

The user also have their own dashboard where they can add and delete and update their own talks 


Instalation:

You will first need to create the database by typing
mysql -u root -p and then source schema.sql in the terminal
You will also need install the required packages by typing npm install
after you will need to seed the data by typing npm run seed
and finally you can start the server bu typing npm start in the terminal 

package required to run
sequelize
bcrypt
dotenv
express-handlebars
express-session
mysql2 and connect-session-sequelize

Contributors:
Megan De Luca
Davis-Cedrick Baseka
Walsh Vaz

github link: https://github.com/mdeluca13/coding-empire-conference.git


