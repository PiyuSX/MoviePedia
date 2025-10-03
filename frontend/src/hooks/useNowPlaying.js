import axios from "axios"
import { useEffect } from "react"
import { nowPlayingUrl, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { setNowPlayingMovies } from "../store/movieSlice"

const useNowPlaying =  () => {
    const dispatch = useDispatch()

    useEffect( ()=> {
       const fetchMovies = async () => {
         try {
           const res = await axios.get(nowPlayingUrl, options)
           dispatch(setNowPlayingMovies(res.data.results))
         } catch (error) {
           console.log(error)
         }
       }
       
       fetchMovies()
    }, [dispatch])
}

export default useNowPlaying