import axios from 'axios';

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '15b081f5b9030a29148fdb73ac896fef',
    language: 'en-US',
  },
});

export const searchMovies = async query => {
  const { data } = await instans.get('search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getPopularMovies = async () => {
  const { data } = await instans.get('movie/popular');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instans.get(`movie/${id}`);
  return data;
};

export const getCredits = async id => {
  const { data } = await instans.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await instans.get(`/movie/${id}/reviews`);
  return data;
};
