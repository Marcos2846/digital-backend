const mongoose = require('mongoose');
require('dotenv').config(); 


const dbConnection =  async  () => {

    try{

   
   await mongoose.connect(process.env.DB_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    });

    console.log('DB connection established');

}   catch(error){

    console.log(error);

    throw  new  Error('Error connecting to database');

}

}

module.exports  =  {
    dbConnection
}