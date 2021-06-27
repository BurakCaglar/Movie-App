import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  Image,
  Wrapper,
  WrapperContent,
  DetailsButton,
  Content,
  TmdbPoints,
  Circular,
  ReleaseDate,
  Genres,
} from "./MoviePoster.styles";

const rankColorList = {
  greaterThan85: "#1A8245",
  greaterThan7: "#48BB70",
  greaterThan6: "#F0C516",
  greaterThan5: "#F59E1D",
  greaterThan4: "#E94C3D",
  lessThan4: "#BF1E2E",
};

const MoviePoster = ({
  image,
  movieId,
  clickable,
  avarage,
  movie,
  genres,
  test,
}) => {
  const [rankColor, setRankColor] = useState("");
/* const divided = movie.release_date.split("/~/");
console.log(movie)
var name = divided[0]; */
  useEffect(() => {
    if (avarage >= 8.5) {
      setRankColor(rankColorList.greaterThan85);
    } else if (avarage >= 7) {
      setRankColor(rankColorList.greaterThan7);
    } else if (avarage >= 6) {
      setRankColor(rankColorList.greaterThan6);
    } else if (avarage >= 5) {
      setRankColor(rankColorList.greaterThan5);
    } else if (avarage >= 4) {
      setRankColor(rankColorList.greaterThan4);
    } else {
      setRankColor(rankColorList.lessThan4);
    }
  }, []);

  return (
    <>
      {clickable ? (
        <Wrapper>
          <WrapperContent>
            <Image src={image} clickable={clickable} alt="movie-image" />
            <Content>
              <ReleaseDate>{movie.release_date && movie.release_date.slice(0,4)}</ReleaseDate>
              <Circular>
                <CircularProgressbarWithChildren
                  value={avarage * 10}
                  text={`${avarage}`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "1.6rem",
                    pathColor: `${rankColor}`,
                    textColor: `${rankColor}`,
                    trailColor: "#d6d6d6",
                  })}
                >
                  <TmdbPoints>tmdb points</TmdbPoints>
                </CircularProgressbarWithChildren>
              </Circular>

              <Genres>{}</Genres>
              <Link to={`/${movieId}`}>
                <DetailsButton>Details</DetailsButton>
              </Link>
            </Content>
          </WrapperContent>
        </Wrapper>
      ) : (
        <Wrapper>
          <Image src={image} alt="movie-image" />
        </Wrapper>
      )}
    </>
  );
};

export default MoviePoster;
