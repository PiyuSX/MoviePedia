import axios from "axios"
import { useEffect } from "react"
import { topRatedUrl, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { setTopRatedMovies } from "../store/movieSlice"

const useTopRated =  () => {
    const dispatch = useDispatch()

    useEffect( ()=> {
       const fetchMovies = async () => {
         try {
           const res = await axios.get(topRatedUrl, options)
           dispatch(setTopRatedMovies(res.data.results))
         } catch (error) {
           console.log(error)
         }
       }
       
       fetchMovies()
    }, [dispatch])
}

export default useTopRated
