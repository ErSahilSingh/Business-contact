const express =require('express');
const app = express();
const mongoose =require('mongoose');
const path = require('path');
const bodyParser =require('body-parser');

//--------------------------port -------//

app.use(express.static(path.join(__dirname, 'views')));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');// to project the views folder


// connection for database//

mongoose.connect('mongodb://localhost/Business', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("mongoodb connected successfully");
});




// ----------body-parser------------//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'views')));

app.use('/user',require('./ROUTER/message-router'))
// ----port-----//

app.listen(3000,()=>{
    console.log("listening to the port 3000");
});
