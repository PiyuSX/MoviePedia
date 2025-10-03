export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQxNjllMTViNDM4M2NiNzkzMTFlMGM1MzYxZDE4MyIsIm5iZiI6MTc1OTQ2MzU5NS4xNjk5OTk4LCJzdWIiOiI2OGRmNDhhYmExMDhlMzM4MjAyZTQ0NjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5ZO4w8AMrvE-iKvFCzSXZ66SaICn5dI2NQRojndi-RE'
  }
};


export const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
export const popularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
export const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

export const API_URL = `http://localhost:8000`