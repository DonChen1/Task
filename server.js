
const express = require('express');
const app = express();
const json = require('json');
const { postAggMessages, testerQ } = require('./controllers/task');
const connectDB = require('./db/connect');
const task = require('./routes/task')


//middleware
app.use(express.json());

//routes
app.use('/message',task)


const port = 3000;

const start = async () =>{
    try {
        await connectDB()
        app.listen(port,console.log(`Server is listening on port ${port}...`));
        
    } catch (error) {
        console.log(error)
    }
}

start()

