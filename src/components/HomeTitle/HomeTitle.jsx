import React from "react";
import * as S from "./HomeTitle.style";

const HomeTitle = () => {
  return (
    <S.RegularText>
      Hello, I'm
      <S.StyledSpan> Eivinas Karažas</S.StyledSpan>.
      <br />
      I'm a front-end web developer.
    </S.RegularText>
  );
};

export default HomeTitle;
