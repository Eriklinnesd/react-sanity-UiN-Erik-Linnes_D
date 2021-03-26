import styled from 'styled-components';

const StyledHeading = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.warning};
`;

const NoMatch = () => (
  <StyledHeading> ERROR 404. PAGE NOT FOUND.</StyledHeading>
);

export default NoMatch;
