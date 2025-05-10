const cor_attendance_m = require('../../models/cor_attendance_m');
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { accessToken} = require("../../middlewares/verifyToken");
const moment = require("moment");

const handlePunchOut = async (req,res) => {
    try{
        //extract body
        const {punch_out_latitude,punch_out_longitude,punch_out_address} = req.body;
        //extract data from token
        const employee_data = accessToken(req);
        console.log(employee_data,"employee");
        //extract empcode
        const emp_code = employee_data.emp_code;
        //check that
        const today = moment().format('YYYY-MM-DD');
        //check today employee punchin or not
        const attendance = await cor_attendance_m.findOne({
            where: { employeeId:emp_code, punch_date: today }
        });

        //if punch_in not exist
        if (!attendance){
            res.status(400).json({status:false,message:'Punch In Not Exist'});
        }
        //update collection
        attendance.punch_out_latitude = punch_out_latitude;
        attendance.punch_out_longitude = punch_out_longitude;
        attendance.punch_out_address = punch_out_address;
        attendance.punch_out_time = new Date();
        attendance.updatedAt =  new Date();
        //save the data
        await attendance.save();
        res.status(200).json({status:true,message:'Punch Out Successfully'});
    }
        catch (err){
        console.log(err);
        res.status(500).json({status:false,message:err.message});
    }
}

module.exports = {handlePunchOut}