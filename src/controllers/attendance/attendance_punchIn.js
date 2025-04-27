//import service
const {handlePunchIn} = require('../../services/attendance/handlePunchIn');



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

module.exports = {punchIn}

