import React from "react";
import { Link } from "react-router-dom";

import { Image, Wrapper, Text } from "./MoviePoster.styles";

const MoviePoster = ({ image, movieId, clickable, avarage, movie }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Wrapper>
            <Image src={image} clickable={clickable} alt="movie-image" />
            <Text>
              <div className="score">{avarage}</div>
            </Text>
          </Wrapper>
        </Link>
      ) : (
        <Wrapper>
          <Image src={image} alt="movie-image" />
        </Wrapper>
      )}
    </div>
  );
};

export default MoviePoster;
