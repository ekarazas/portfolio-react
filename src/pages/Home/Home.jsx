import React from "react";
import CenteredDiv from "../../components/CenteredDiv/CenteredDiv";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Home>
      <CenteredDiv>
        <HomeTitle />
      </CenteredDiv>
    </S.Home>
  );
};

export default Home;
