import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.png";
import { useHomeFetch } from "../hooks/useHomeFetch";
import MainImage from "./MainImage";
import Grid from "./Grid";
import MoviePoster from "./MoviePoster";

import SearchBar from "./SearchBar";

const Home = () => {
  const { state, setSearchTerm, searchTerm } = useHomeFetch();

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <MainImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].genres}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results:" : "Popular Movies"}>
        {state.results.map((movie) => (
          <MoviePoster
            movie={movie}
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            avarage={movie.vote_average}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
