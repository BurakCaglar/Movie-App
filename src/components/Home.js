import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.png";
import { useHomeFetch } from "../hooks/useHomeFetch";
import MainImage from "./MainImage";
import Grid from "./Grid";
import MoviePoster from "./MoviePoster";

import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const Home = () => {
  const { state, setSearchTerm, searchTerm, loading } = useHomeFetch();

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <MainImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results:" : "Popular Movies"}>
        {state.results.map((movie) => (
          <MoviePoster
            key={movie.id}
            movieId={movie.id}
            avarage={movie.vote_average}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
          />
        ))}
      </Grid>
      {loading && <Spinner />}
    </>
  );
};

export default Home;
