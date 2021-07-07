import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  background: transparent;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 375px) {
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const Menu = styled.nav``;

export const StyledLink = styled(Link)`
  color: #f8f7ed;
  border-radius: 100rem;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.8rem 0.3rem;
  position: relative;
  transition: ease-in 0.2s;

  &.active {
    color: #00fff3;
  }
  
  @media only screen and (min-width: 375px) {
    padding: 0.8rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 0.9rem;

    &:hover {
      color: #00fff3;
    }
  }
`;
