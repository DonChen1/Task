const mongoose = require('mongoose');

const connectionString = 
'mongodb+srv://Donovan:Donovan123@nodeexpressprojects.m8bcc.mongodb.net/Messages?retryWrites=true&w=majority'


const connectDB = (url)=>{
    return mongoose.connect(connectionString,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}


module.exports = connectDB

