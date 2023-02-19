import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../shared/services/API';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviews();
  }, [id, setReviews]);

  const rews = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.item}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      <ul className={css.list}>
        {rews.length === 0 ? "We don't have any reviews for this movie" : rews}
      </ul>
    </>
  );
};

export default Reviews;
