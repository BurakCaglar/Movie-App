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

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error, similars, reviews } = useMovieFetch(
    movieId
  );
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
        {movie.actors.slice(0, 6).map((actor) => (
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
            movie={movie}
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
const BackButton = styled.div`
  position: absolute;
  right: 20%;
  bottom: 10%;
  transform: translate(20%, 10%);
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  border: 2px solid grey;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3rem;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;
