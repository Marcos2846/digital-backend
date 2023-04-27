const  express =  require('express');
require('dotenv').config();
const  { dbConnection } = require('./database/config');
const { getCodeString } = require ('./functions/decryptedString');
const cors = require('cors');

//crear servidor  express 
const app = express();

//Cors configuration
app.use(cors());

//Database
dbConnection();


//import funcions 
//console.log(getCodeString("Robert0Smith0123"));

//Ud6q7ao4WyOCtc3l
//dbMarcos


//console.log(getCodeString("Robert0Smith0123"));

app.listen(process.env.PORT, () =>{
    console.log('Server listening on port '  + process.env.PORT);
})