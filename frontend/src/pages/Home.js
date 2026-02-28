import React, { useEffect } from 'react'


// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'



const Home = () => {


  //   useState
  // const [workouts, setWorkouts] = useState(null)

  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(()=>{
       const fetchWorkouts = async()=>{
        const response = await fetch('http://localhost:4000/api/workouts/')
        const json = await response.json()

        if(response.ok){
          // useState
          // setWorkouts(json)

          dispatch({type: 'SET_WORKOUT', payload: json})
        }
       }

       fetchWorkouts()
  }, [dispatch])

  // key={workout._id}
  return (
    <div className='home'>
         <div className='workouts'>
          {
            workouts && workouts.map((workout) =>(
              <WorkoutDetails key={workout._id} workout={workout} />
              
            ))
          }
         </div>
         <WorkoutForm />
    </div>
  )
}

export default Home