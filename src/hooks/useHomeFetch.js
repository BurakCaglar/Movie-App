import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [topRated, setTopRated] = useState(initialState);
  const [moviesPopular, setMoviesPopular] = useState(initialState);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // initial results and search results
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  const fetchGenres = async () => {
    try {
      setError(false);
      setLoading(true);

      const genres = await API.fetchGenres();

      setGenres({ ...genres });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  const fetchTopRated = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const topRated = await API.fetchTopRated(page);

      setTopRated((prev) => ({
        ...topRated,
        results:
          page > 1
            ? [...prev.results, ...topRated.results]
            : [...topRated.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // initial results and search results
  useEffect(() => {
    setTopRated(initialState);
    fetchTopRated(1);
    fetchTopRated(2);
    fetchTopRated(3);
    fetchGenres();
  }, []);

  const fetchMoviesPage = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const moviesPopular = await API.fetchMovies(page);

      setMoviesPopular((prev) => ({
        ...moviesPopular,
        results:
          page > 1
            ? [...prev.results, ...moviesPopular.results]
            : [...moviesPopular.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // initial results and search results
  useEffect(() => {
    setMoviesPopular(initialState);
    fetchMoviesPage(0);
  }, []);

  return {
    state,
    topRated,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    moviesPopular,
    genres,
  };
};
