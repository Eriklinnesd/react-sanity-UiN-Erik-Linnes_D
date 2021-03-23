// eslint-disable-next-line no-unused-vars
import { Prompt } from 'react-router-dom';
import styled from 'styled-components';
import Movies from '../components/Movies';

const StyledHeading = styled.h1`
  text-align: center;
`;

const Filmer = () => (
  <>
    <StyledHeading> Dette er filmer. </StyledHeading>
    <Movies />
    {/* <Prompt when message="Er du sikker på at du vil gå ut av denne siden?" /> */}
  </>
);

export default Filmer;
