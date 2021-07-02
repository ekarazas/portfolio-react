import React from "react";
import * as S from "./SkillsLevel.style";

function SkillsLevel({ skill, level }) {
  return (
    <S.SkillsLevel>
      <S.Title>{skill}</S.Title>
      <S.LevelNumber>{level}%</S.LevelNumber>
      <S.Bar>
        <S.Level level={level}></S.Level>
      </S.Bar>
    </S.SkillsLevel>
  );
}

export default SkillsLevel;
