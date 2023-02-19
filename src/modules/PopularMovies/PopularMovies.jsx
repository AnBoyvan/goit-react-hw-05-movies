import { useState, useEffect } from 'react';

import MovieItems from '../../shared/components/MovieItems/MovieItems';
import { getPopularMovies } from '../../shared/services/API';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getPopularMovies();
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovie();
  }, []);

  return (
      <MovieItems items={movies} />
  );
};

export default PopularMovies;
