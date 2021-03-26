import { useState } from 'react';
import styled from 'styled-components';
import getMovies from '../utils/movieService';
import Movie from './Movie';

const StyledButton = styled.button`
  background-color: tomato;
  color: white;
  border: 1px solid tomato;
  border-radius: 5px;
  width: 11vw;
  height: 5vh;
  font-weight: 700;
  font-size: 1.5rem;
  position: relative;
  top: 50%;
  left: 45%;
  margin-top: 10px;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  return (
    <div>
      {movies.map((movie) => (
        <Movie title={movie.title} actor={movie.actor} />
      ))}

      <StyledButton type="button" onClick={handleClick}>
        {' '}
        Klikk meg{' '}
      </StyledButton>
    </div>
  );
};

export default Movies;
