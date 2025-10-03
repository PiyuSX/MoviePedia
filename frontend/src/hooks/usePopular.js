import axios from "axios"
import { useEffect } from "react"
import { popularUrl, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { setPopularMovies } from "../store/movieSlice"

const usePopular =  () => {
    const dispatch = useDispatch()

    useEffect( ()=> {
       const fetchMovies = async () => {
         try {
           const res = await axios.get(popularUrl, options)
           dispatch(setPopularMovies(res.data.results))
         } catch (error) {
           console.log(error)
         }
       }
       
       fetchMovies()
    }, [dispatch])
}

export default usePopular
