import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: transparent;
  min-height: 4.2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 1.5rem 0.7rem;

  @media only screen and (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.8rem 0.3rem;
  position: relative;
  transition: ease-in 0.2s;

  @media only screen and (min-width: 769px) {
    &:hover {
      color: #00fff3;
    }
  }
`;
