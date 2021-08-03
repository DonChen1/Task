const Message = require('../models/task');

const createTask = async (req,res) => {
    try {
        const task = await Message.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}

const getAllTasks = async (req,res) =>{
    try {
    const tasks = await Message.find({});
    res.status(201).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}



// function testerQ () {
//     const newMess = Message.aggregate(
//         [
//           { $batches : { _id : "$destination", text: { $push: "$text" }, timestamp: {$push: "$timestamp"} } }
//         ]
        
//      )
//     // const messM = newMess.json;
//      console.log(JSON.stringify(newMess));
//}



module.exports = {
    createTask,
    getAllTasks,
    
}