import Card from "./Card"
import useNowPlaying from "../hooks/useNowPlaying"
import usePopular from "../hooks/usePopular"
import useTopRated from "../hooks/useTopRated"
import useUpcoming from "../hooks/useUpcoming"
import { useSelector } from "react-redux"

const List = () => {
    useNowPlaying()
    usePopular()
    useTopRated()
    useUpcoming()
    
    const nowPlayingMovies = useSelector((store) => store.movies.movies)
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    const lists = [
        { title: "Now Playing", movies: nowPlayingMovies },
        { title: "Popular", movies: popularMovies },
        { title: "Top Rated", movies: topRatedMovies },
        { title: "Upcoming", movies: upcomingMovies }
    ]
    
  return (
    <div className="py-8 px-6 bg-gray-900">
      {lists.map((list) => (
        <div key={list.title} className="mb-8">
          <h2 className="font-bold text-2xl mb-4 text-white border-l-4 border-red-600 pl-4">{list.title}</h2>
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {list.movies && list.movies.map((movie) => (
              <Card key={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default List
