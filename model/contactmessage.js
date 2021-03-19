var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
       name:{
           type:String,
           require:true
       },
       email:{
           type:String,
           require:true
       },
       number:{
           type:Number,
           require:true
       },
       message:{
           type:String,
            require:true
       }
       
});

module.exports =mongoose.model("contactmessage",messageSchema);