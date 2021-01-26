import React from "react";
import styled from "styled-components";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.png";
import MainImage from "./MainImage";
import Grid from "./Grid";
import MoviePoster from "./MoviePoster";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data/data";

const Home = () => {
  const {
    state,
    topRated,
    setSearchTerm,
    searchTerm,
    loading,
    moviesPopular,
    genres,
  } = useHomeFetch();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      {searchTerm ? (
        <Grid header={`Search results for ${searchTerm} :`}>
          {state.results.map((movie) => (
            <MoviePoster
              movie={movie}
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
      ) : (
        <>
          <Wrapper>
            <h1>Popular Movies</h1>
            <StyledSlider
              {...settings}
              style={{ width: "100%", margin: "auto" }}
            >
              {moviesPopular.results.map((movie) => (
                <MoviePoster
                  movie={movie}
                  key={movie.id}
                  movieId={movie.id}
                  avarage={movie.vote_average}
                  releaseDate={movie.release_date}
                  test={movie.genre_ids}
                  clickable={true}
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : NoImage
                  }
                />
              ))}
            </StyledSlider>
          </Wrapper>
          <Wrapper>
            <h1>Top Rated Movies</h1>
            <StyledSlider
              {...settings}
              style={{ width: "100%", margin: "auto" }}
            >
              {topRated.results.map((movie) => (
                <MoviePoster
                  movie={movie}
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
            </StyledSlider>
          </Wrapper>
        </>
      )}

      {loading && <Spinner />}
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 0 2rem 0;

  h1 {
    color: ${(props) => props.theme.title};
    font-family: SFProDisplayMedium;
    font-size: 2.5rem;
    margin-left: 4rem;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

// Edited Slider //

const StyledSlider = styled(Slider)`
  position: relative;

  .slick-slide {
    padding: 2rem 3rem 2rem 1rem;
    margin-left: -1rem;
  }
  .slick-prev {
    position: absolute;
    top: -5rem;
    left: auto;
    right: 25rem !important;
    :before {
      content: "<";
      color: ${(props) => props.theme.title};
      font-size: 30px;
    }
  }

  .slick-next {
    position: absolute;
    right: 20rem;
    top: -5rem;
    :before {
      content: ">";
      color: ${(props) => props.theme.title};
      font-size: 30px;
    }
  }
`;
