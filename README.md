# BLOG on MERN stack
The client part of this project is written in React+ Redux. The styled components library is used to work with styles. Axios is used to work with the server API.

The server part is written in Express. Authorization in the admin panel works through tokens.

In order to create an administrator account, go to the address of your running project + /admin
# How to install and start?
First you need to install NodeJS: https://nodejs.org/en/download/

Next, you can download MongoDB to your server, or create your database in MongoDB Atlas (https://www.mongodb.com/atlas/database ).

Clone the repository and go to its folder. 
After creating the database, you can connect it at mern-blog/server/.env. 

Open the client and server folders in the terminal and enter the following commands in them:

    npm install
    npm start

To connect your server to the client, enter the server address in the configuration file mern-blog/client/src/config.js
