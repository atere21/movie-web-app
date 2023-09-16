const key = 'c956c6ae0469537b152ae95ec0bad867';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
 
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=1`, // Corrected URL for trending movies
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
