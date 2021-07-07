import React from "react";
import * as S from "./Header.style";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  
  return (
    <S.Header>
      <S.StyledLink to="/" className={splitLocation[1] === "" ? "active" : ""}>
        Home
      </S.StyledLink>
      <S.StyledLink
        to="/about"
        className={splitLocation[1] === "about" ? "active" : ""}
      >
        About
      </S.StyledLink>
      <S.StyledLink
        to="/resume"
        className={splitLocation[1] === "resume" ? "active" : ""}
      >
        Resume
      </S.StyledLink>
      <S.StyledLink
        to="/projects"
        className={splitLocation[1] === "projects" ? "active" : ""}
      >
        Projects
      </S.StyledLink>
    </S.Header>
  );
};

export default Header;
