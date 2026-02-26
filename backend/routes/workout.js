const express = require('express')
const workoutModel = require('../models/workoutModel')
const { getAllWorkout, createWorkout, getWorkoutById, deleteWorkoutById, updateWorkoutById } = require('../controllers/workout-controller')

const router = express.Router()

/**
 * Routes: /api/workouts
 * Method: GET
 * Description: Get all workouts
 * Access: Public
 * Parameter: None
 */

router.get('/',getAllWorkout)

/**
 * Routes: /api/workouts/:id
 * Method: GET
 * Description: Get a single workouts by its id
 * Access: Public
 * Parameter: id
 */

router.get('/:id',getWorkoutById)

/**
 * Routes: /api/workouts
 * Method: POST
 * Description: Create / Add a new workout
 * Access: Public
 * Parameter: None
 */

router.post('/',createWorkout)

/**
 * Routes: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by its id
 * Access: Public
 * Parameter: Id
 */

router.delete('/:id',deleteWorkoutById)

/**
 * Routes: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its id
 * Access: Public
 * Parameter: Id
 */

router.patch('/:id', updateWorkoutById)

module.exports = router