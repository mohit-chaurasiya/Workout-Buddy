// Importing express 
const express = require('express')
const dotenv = require('dotenv')
const workoutRoutes = require('./routes/workout')

dotenv.config()

//  express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path,req.method);
    next();

})

// Routes  (http://localhost:4000/)
app.get('/',(req,res)=>{
    res.json({
        message : 'welcome to our application'
    })
})

app.use('/api/workouts/',workoutRoutes)


// Port num
const PORT = process.env.PORT;

// listen for request
app.listen(PORT,()=>{
    console.log(`Server up and runing at : http://localhost:${PORT}`)
})