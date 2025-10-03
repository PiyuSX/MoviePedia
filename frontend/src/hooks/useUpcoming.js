import axios from "axios"
import { useEffect } from "react"
import { upcomingUrl, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { setUpcomingMovies } from "../store/movieSlice"

const useUpcoming =  () => {
    const dispatch = useDispatch()

    useEffect( ()=> {
       const fetchMovies = async () => {
         try {
           const res = await axios.get(upcomingUrl, options)
           dispatch(setUpcomingMovies(res.data.results))
         } catch (error) {
           console.log(error)
         }
       }
       
       fetchMovies()
    }, [dispatch])
}

export default useUpcoming
