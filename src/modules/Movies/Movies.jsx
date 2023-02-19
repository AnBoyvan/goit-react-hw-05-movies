import { Formik, Form, Field } from 'formik';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieItems from '../../shared/components/MovieItems/MovieItems';
import { searchMovies } from '../../shared/services/API';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const initialValues = {
    search: '',
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await searchMovies(query);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (query === '') {
      return;
    }
    fetchMovie();
  }, [query]);

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim() === '') {
      Notiflix.Notify.failure('Please enter a search');
      resetForm();
      return;
    }
    setSearchParams({ query: search });
    resetForm();
  };

  return (
    <>
      <div className={css.Searchbar}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.SearchForm}>
            <Field
              type="text"
              name="search"
              className={css.SearchFormIinput}
              autoFocus
            ></Field>
            <button type="submit" className={css.SearchFormBtn}>
              Search
            </button>
          </Form>
        </Formik>
      </div>
      <MovieItems items={movies} />
    </>
  );
};

export default Movies;
