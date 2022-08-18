import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieInfoContainer = styled.div``;

function MovieInfo({ id, title, coverImg, summary, genres }) {
  return (
    <MovieInfoContainer key={id}>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img alt={title} src={coverImg} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li ley={genre}>{genre}</li>
        ))}
      </ul>
    </MovieInfoContainer>
  );
}

MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieInfo;
