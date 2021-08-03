const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    destination:String,
    text:String,
    timestamp:String
})

module.exports = mongoose.model('Task', taskSchema);