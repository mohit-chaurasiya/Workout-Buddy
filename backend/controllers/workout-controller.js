const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose")
// get all workouta

exports.getAllWorkout = async(req,res) => {

    try{
        const workout = await workoutModel.find({}).sort({createdAt: -1})

        if(!workout){
            return res.status(404).json({
                success: false,
                error: "No workout found"
            })
        }

        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({
            error : error.message
        })
    }

}


// get a single workout by its id 

exports.getWorkoutById = async (req,res) => {
    
    const {id} = req.params;

    try{
        const workout = await workoutModel.findById(id);

        if(!workout){
            return res.status(404).json({
                success: false,
                message: `No workout found with the id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            data : workout
        })

    }catch(error){
          return res.status(400).json({
             message: `No workout found with the id ${id}`
          })
    }

}


// create a new workout
exports.createWorkout = async(req,res)=>{

    const {title, load, reps} = req.body;
    try{
         const workout = await workoutModel.create({title, load, reps} );
         res.status(200).json(workout)
    }catch(error){
       res.status(400).json({
        error: error.message
       })
    }
}

// delete a workout by its id

exports.deleteWorkoutById = async (req,res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "No such workout"
        })
    }

    const workout = await workoutModel.findByIdAndDelete(id)
    
    if(!workout){
        return res.status(400).json({
            error: "No such workout to delete"
        })
    }
    
    
    return res.status(200).json({
        success: true,
        message: "Workout deleted Successfully"
    })
}


// update a workout by id

exports.updateWorkoutById = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "No such workout is to update"
        })
    }

    const workout = await workoutModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            ...req.body
        },
        {
            new: true
        }
    )

    if(!workout){
        return res.status(404).json({
            error : "No such workout is to update"
        })
    }

    res.status(200).json(workout)


}