import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";

import { useMovieFetch } from "../hooks/useMovieFetch";

import Spinner from "./Spinner";
import MoviePoster from "./MoviePoster";
import MovieDetail from "./MovieDetail";
import Actor from "./Actor";
import NoImage from "../images/no_image.png";
import { BackButton } from "./Buttons/Buttons";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error, similars } = useMovieFetch(movieId);

  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    <p>Ups! There is an error.</p>;
  }

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />

      <MovieWrapper>
        <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
        <MovieDetail movie={movie} />
      </MovieWrapper>
      <Grid header="Actors">
        {movie.actors.slice(0, 10).map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>

      <Grid header="Similars">
        {similars.results.map((movie) => (
          <MoviePoster
            key={movie.id}
            clickable
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

export default Movie;

const MovieWrapper = styled.div`
  position: relative;
`;
