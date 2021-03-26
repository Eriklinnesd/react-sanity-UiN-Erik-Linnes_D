import styled from 'styled-components';
import Movies from '../components/Movies';

const StyledHeading = styled.h1`
  text-align: center;
`;

const Filmer = () => (
  <>
    <StyledHeading> Dette er filmer. </StyledHeading>
    <Movies />
  </>
);

export default Filmer;
