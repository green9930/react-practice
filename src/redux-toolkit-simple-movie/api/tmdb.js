// API 참고
// https://www.themoviedb.org/documentation/api/discover

// API REQUEST SAMPLE
// https://api.themoviedb.org/3/movie/550?api_key=b8732a28012043cd71b5f3b9a7424308

const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_LANG = 'ko';
const BASE_REGION = 'KR';

// /discover/movie?sort_by=popularity.desc
export const getPopularMovies = () => {
  return `${BASE_URL}/movie/popular?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

// GET DETAILS SAMPLE
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getMovieDetails = (id) => {
  return `${BASE_URL}/movie/${id}?api_key=${TMDB_KEY}&language=${BASE_LANG}&append_to_response=videos`;
};

// IMAGES SAMPLE
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
export const getImageUrl = (path, size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

// VIDEOS SAMPLE
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
export const getVideoUrl = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_KEY}&language=${BASE_LANG}`;
};

const tmdb = () => {
  // MOST POPULAR MOVIE
};

export default tmdb;
