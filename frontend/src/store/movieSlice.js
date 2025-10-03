import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        movies: [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: []
    },
    reducers:{
        setNowPlayingMovies:(state,action)=> {
            state.movies = action.payload
        },
        setPopularMovies:(state,action)=> {
            state.popularMovies = action.payload
        },
        setTopRatedMovies:(state,action)=> {
            state.topRatedMovies = action.payload
        },
        setUpcomingMovies:(state,action)=> {
            state.upcomingMovies = action.payload
        }
    }

})

export const {setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer