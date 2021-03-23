import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  margin-bottom: 50px;
  box-shadow: 0px 5px 5px lightgrey;
  height: 75px;
  padding-right: 30px;
`;

const NavMenu = styled.ul`
  display: flex;
`;

const NavMenuItem = styled.li`
  padding: 0 2rem;

  &:first-child {
    padding-left: 10px;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: tomato;
      border-bottom: 4px solid tomato;
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          {' '}
          Hjem{' '}
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/filmer" activeClassName="active">
          {' '}
          Filmer{' '}
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/about" activeClassName="active">
          {' '}
          Om{' '}
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Navigation;
