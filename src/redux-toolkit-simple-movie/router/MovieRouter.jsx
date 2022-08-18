import MovieBookmarkPage from 'redux-toolkit-simple-movie/pages/MovieBookmarkPage';

const { Routes, Route } = require('react-router-dom');
const {
  default: MovieDetailPage,
} = require('redux-toolkit-simple-movie/pages/MovieDetailPage');
const {
  default: MovieMainPage,
} = require('redux-toolkit-simple-movie/pages/MovieMainPage');

const MovieRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieMainPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/bookmarks" element={<MovieBookmarkPage />} />
    </Routes>
  );
};

export default MovieRouter;
