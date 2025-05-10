//import service
const {handlePunchIn} = require('../../services/attendance/handlePunchIn');
const {handlePunchOut} = require("../../services/attendance/handlePunchOut");



const punchIn = async (req, res) => {
    //extract body
   try{
       const result = await handlePunchIn(req,res);

       if(result){
           console.log("ha")
           res.status(200).json({status:true,message:'Punch In Successfully'});
       }else{
           res.status(400).json({status:false,message:'Punch In Failed'});
       }
   }catch (err){
        // console.log(err);
        res.status(500).json({status:false,message:err.message});
   }
}

//punch out

const punchOut = async (req, res) => {
    try {
        const result = await handlePunchOut(req,res);
        if(result){
            res.status(200).json({status:true,message:'Punch Out Successfully'});
        }else{
            res.status(400).json({status:false,message:'Punch Out Failed'});
        }
    }catch (err){
        res.status(500).json({status:false,message:err.message});
    }
}

module.exports = {punchIn,punchOut}

