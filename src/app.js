const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();


//import router
const attendanceRouter = require('./routes/attandance');

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Employee Service is running');
})

//init router
console.log(process.env.JWT_SECRET)
app.use("/api/v1/attendance",attendanceRouter);

module.exports = app;