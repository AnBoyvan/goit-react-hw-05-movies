import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieItems.module.css';

const MovieItems = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, poster_path }) => (
    <li className={css.item} key={id}>
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className={css.poster}
            alt=""
          ></img>
        )}
        <p>{title}</p>
      </Link>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default MovieItems;

MovieItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
