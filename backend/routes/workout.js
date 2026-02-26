const express = require('express')

const router = express.Router()

/**
 * Routes: /api/workouts
 * Method: GET
 * Description: Get all workouts
 * Access: Public
 * Parameter: None
 */

router.get('/',(req,res)=>{
    res.json({
        msg: "Get all workouts"
    })
})

/**
 * Routes: /api/workouts/:id
 * Method: GET
 * Description: Get a single workouts by its id
 * Access: Public
 * Parameter: id
 */

router.get('/:id',(req,res)=>{
    res.json({
        msg: "Get a single workouts by its id"
    })
})

/**
 * Routes: /api/workouts
 * Method: POST
 * Description: Create / Add a new workout
 * Access: Public
 * Parameter: None
 */

router.post('/',(req,res)=>{
    res.json({
        msg: "Post a new workout"
    })
})

/**
 * Routes: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by its id
 * Access: Public
 * Parameter: Id
 */

router.delete('/:id',(req,res)=>{
    res.json({
        msg: "Delete a workout by its id"
    })
})

/**
 * Routes: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its id
 * Access: Public
 * Parameter: Id
 */

router.patch('/:id',(req,res)=>{
    res.json({
        msg: "Update a workout by its id"
    })
})

module.exports = router