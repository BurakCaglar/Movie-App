import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "./config";

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopRated: async (page) => {
    const topRatedEndpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    return await (await fetch(topRatedEndpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchSimilars: async (movieId) => {
    const similarsEndpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`;
    return await (await fetch(similarsEndpoint)).json();
  },
  fetchReleaseDates: async (movieId) => {
    const releaseDatesEndpoint = `${API_URL}movie/${movieId}/release_dates?api_key=${API_KEY}`;
    return await (await fetch(releaseDatesEndpoint)).json();
  },
  fetchReviews: async (movieId) => {
    const reviewsEndpoint = `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
    return await (await fetch(reviewsEndpoint)).json();
  },
  fetchTranslations: async (movieId) => {
    const translationsEndpoint = `${API_URL}movie/${movieId}/translations?api_key=${API_KEY}`;
    return await (await fetch(translationsEndpoint)).json();
  },
  fetchVideos: async (movieId) => {
    const videosEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
    return await (await fetch(videosEndpoint)).json();
  },
  fetchGenres: async () => {
    const genresEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}`;
    return await (await fetch(genresEndpoint)).json();
  },
};

export default apiSettings;
