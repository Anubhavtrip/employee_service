const mysql2 = require('mysql2');
require('dotenv').config();
const {Sequelize} = require('sequelize');
//connect to mysql database  // this is connection without ORM

// const connection = mysql2.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

// connection.connect((err)=>{
//     if(err){
//         console.log('Error connecting to database',err.message);
//         return;
//     } else {
//         console.log('connected to database');
//     }
//
// });

//connect using orm

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect:'mysql',
        logging:false,
    }

)

module.exports = sequelize;

