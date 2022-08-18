import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const getDatails = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(response);
  };

  useEffect(() => {
    getDatails();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Detail;
