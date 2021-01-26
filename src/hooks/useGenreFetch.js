import { useState, useEffect } from "react";
import API from "../API";

const useGenreFetch = () => {
  const [genre, setGenre] = useState([]);

  const fetchGenre = async (genreId) => {
    try {
      setError(false);
      setLoading(true);

      const genre = await API.fetchGenre(genreId);

      setState(genre);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // initial results and search results
  useEffect(() => {
    fetchGenre(genreId);
  }, []);
  return <></>;
};

export default useGenreFetch;
