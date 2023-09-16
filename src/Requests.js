const key = '6308e98f9cc4c1f4bb89a792df3bfbf5';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=`,
};

export default requests