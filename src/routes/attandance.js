const express = require('express');
const attendanceRouter = express.Router();

//import contrioller
const {punchIn} = require('../controllers/attendance/attendance_punchIn');

attendanceRouter.post('/punch_in',punchIn)

module.exports = attendanceRouter;