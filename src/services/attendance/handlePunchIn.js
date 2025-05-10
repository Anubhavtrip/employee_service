//table import

const cor_attendance_m = require('../../models/cor_attendance_m');
require('dotenv').config();
const {accessToken} = require("../../middlewares/verifyToken");


const handlePunchIn = async (req, res) => {
    try {
        // Extract body
        const { punch_in_latitude, punch_in_longitude, punch_in_address } = req.body;
        console.log(punch_in_latitude, punch_in_longitude, punch_in_address);

        // Extract data from token
        const token_data = accessToken(req);
        console.log(token_data);

        // Create data
        const data = {
            employeeId: token_data.emp_code,
            punch_in_latitude,
            punch_in_longitude,
            punch_in_address,
            punch_status: "present",
            punch_date: new Date(),
            punch_in_time: new Date(),
            punch_out_time: null,
            leave_type: false,
            enter_date: new Date(),
        };

        const insertData = await cor_attendance_m.create(data);

        return insertData;
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

module.exports = {handlePunchIn}