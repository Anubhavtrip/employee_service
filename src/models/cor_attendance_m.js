const {Sequelize, DataTypes} = require('sequelize');
//import database
const sequelize = require('../config/dbConfig');


//create a table cor_attendance_m
const cor_attendance_m = sequelize.define('cor_attendance_m',{
    // _id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    //     primaryKey:true,
    // },
    employeeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    punch_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    punch_in_time:{
        type:DataTypes.TIME,
        allowNull:false,
    },
    punch_out_time:{
        type:DataTypes.TIME,
        allowNull:true,
    },
    punch_status:{
        type:DataTypes.STRING,
        allowNull:true     //present , halfday,short leave
    },
    leave_type:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false,
    },
    punch_in_latitude:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    punch_in_longitude:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    punch_out_latitude:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    punch_out_longitude:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    punch_in_address:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    punch_out_address:{
        type:DataTypes.STRING,
        allowNull:true,
    },

    enter_date:{
        type:DataTypes.DATE,
        allowNull:true,
    }




},{
    timestamps:true,
    freezeTableName:true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id:false,
})

module.exports = cor_attendance_m;
