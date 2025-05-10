const express = require('express');
const attendanceRouter = express.Router();

//import contrioller
const {punchIn,punchOut} = require('../controllers/attendance/attendance_punchIn');
const {isSecure} = require("../middlewares/request_validation/is_secure");

attendanceRouter.post('/punch_in',isSecure,punchIn)

//punch out
attendanceRouter.post('/punch_out',isSecure,punchOut)

module.exports = attendanceRouter;