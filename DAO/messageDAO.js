const messageModel = require('../model/contactmessage');


const messageDAO={
    insertmessage: async function(bodyData){

        try {
            let insert = await messageModel.insertMany({
                name:bodyData.name,
                email:bodyData.email,
                number:bodyData.number,
                message:bodyData.message
            });
            if(insert.length!=0)
            return {status:200,message:"YOUR REQUEST HAD BE RECORDED SUCCESFULLY WITH US", DATA: insert};
            else
                return {status:400,message:"DUE TO SOME TECHNICAL ISSUE YOUR REQUEST HAD NOT SUBMITTED SUCCESSFULLY... PLS TRY AGAIN ", DATA: insert};
            
        }
         catch (error) {
            return {status:500,message:"SERVER ISSUESS ... PLS TRY AGAIN ", DATA: insert};
        }
    }
     
}

module.exports=messageDAO;