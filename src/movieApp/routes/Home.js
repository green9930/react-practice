import { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const LoadinsMsg = () => {
    return <h1>Loading...</h1>;
  };

  const Movie = () => {
    return (
      <div>
        <h1>Movie App</h1>
        {movies.map(({ id, title, medium_cover_image, summary, genres }) => (
          <MovieInfo
            id={id}
            title={title}
            coverImg={medium_cover_image}
            summary={summary}
            genres={genres}
          />
        ))}
      </div>
    );
  };

  console.log(movies);

  return <div>{loading ? <LoadinsMsg /> : <Movie />}</div>;
}

export default Home;
