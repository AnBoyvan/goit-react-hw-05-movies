import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../../shared/services/API';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCast();
  }, [id]);

  const castes = cast.map(({ id, name, character, profile_path }) => (
    <li className={css.item} key={id}>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          className={css.photo}
          alt=""
        ></img>
      )}
      <p className={css.name}>{name}</p>
      <p className={css.character}>Character: {character}</p>
    </li>
  ));

  return (
    <>
      <ul className={css.list}>
        {castes.length === 0 ? "We don't have any cast for this movie" : castes}
      </ul>
    </>
  );
};

export default Cast;
