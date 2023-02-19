import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovieById } from '../../shared/services/API';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SingleMovie.module.css';

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
        setGenres(data.genres);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieId();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);
  return (
    <div className={css.section}>
      <button className={css.btn} onClick={goBack}>
        GO BACK
      </button>
      <div className={css.info}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className={css.poster}
            alt=""
          ></img>
        )}
        <div className={css.decription}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.details}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <h3 className={css.details_title}>Overview:</h3>
          <p className={css.details}>{movie.overview}</p>
          <h3 className={css.details_title}>Genres:</h3>
          <ul className={css.genres}>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.menu}>
        <NavLink className={css.link} to="cast" state={{ from }}>
          Cast
        </NavLink>
        <NavLink className={css.link} to="reviews" state={{ from }}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default SingleMovie;
