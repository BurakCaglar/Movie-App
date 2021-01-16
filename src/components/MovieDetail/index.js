import React from "react";
import MoviePoster from "../MoviePoster";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.png";
import { Wrapper, ContentWrapper, Content, Text } from "./MovieDetail.styles";

const MovieDetail = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <ContentWrapper>
        <Content>
          <MoviePoster
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            alt="movie-thumb"
          />
          <Text>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.release_date.slice(0, 4)}</p>
            <div className="rating-directors">
              <div></div>
              <div className="director">
                <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                {movie.directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
              <p>{movie.genres.map((genre) => genre.name)}</p>
            </div>
          </Text>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MovieDetail;
