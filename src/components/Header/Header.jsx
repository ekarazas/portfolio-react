import React from "react";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.Menu>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
        <S.StyledLink to="/resume">Resume</S.StyledLink>
        <S.StyledLink to="/projects">Projects</S.StyledLink>
      </S.Menu>
    </S.Header>
  );
};

export default Header;
