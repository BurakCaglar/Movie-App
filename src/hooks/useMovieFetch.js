import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [similars, setSimilar] = useState({});
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const similars = await API.fetchSimilars(movieId);
        const releaseDates = await API.fetchReleaseDates(movieId);
        const reviews = await API.fetchReviews(movieId);

        // directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
          releaseDates,
        });
        setSimilar({ ...similars });
        setReviews({ ...reviews });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);
  return { state, similars, reviews, loading, error };
};
