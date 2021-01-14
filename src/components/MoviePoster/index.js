import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Image, Wrapper, Text } from "./MoviePoster.styles";

const rankColorList = {
  green: "green",
  red: "red",
  brown: "brown",
};

const MoviePoster = ({ image, movieId, clickable, avarage }) => {
  const [rankColor, setRankColor] = useState("");

  useEffect(() => {
    if (avarage >= 7) {
      setRankColor(rankColorList.green);
    } else if (avarage >= 6) {
      setRankColor(rankColorList.brown);
    } else {
      setRankColor(rankColorList.red);
    }
  }, []);

  return (
    <>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Wrapper>
            <Image src={image} clickable={clickable} alt="movie-image" />
            <Text>
              <div className="score" style={{ color: rankColor }}>
                {avarage}
              </div>
            </Text>
          </Wrapper>
        </Link>
      ) : (
        <Wrapper>
          <Image src={image} alt="movie-image" />
        </Wrapper>
      )}
    </>
  );
};

export default MoviePoster;
