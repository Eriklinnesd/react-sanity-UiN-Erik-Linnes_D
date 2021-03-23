import styled from 'styled-components';

const StyledMovie = styled.li`
  font-size: 2rem;
  list-style: none;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

/* eslint-disable react/prop-types */
const Movie = ({ title, actor }) => (
  <StyledMovie>
    {' '}
    {title}, Skuespiller: {actor}
  </StyledMovie>
);

export default Movie;
