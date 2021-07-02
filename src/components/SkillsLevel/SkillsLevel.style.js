import styled from "styled-components";
import { keyframes } from "styled-components";

export const SkillsLevel = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h4`
  font-size: 0.8rem;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const LevelNumber = styled.div`
  font-size: 0.8rem;
  text-align: right;
  margin-bottom: 0.3rem;
`;

export const Bar = styled.span`
  background: #353b48;
  display: block;
  height: 0.3rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px #00fff350;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const FullfillBar = (props) => keyframes`
    0% {
        width: 0%;
    }

    100% {
         width: ${(props) => props.level}%;
    }
`;

export const Level = styled.span`
  float: left;
  height: 0.3rem;
  background: #00fff3;
  width: ${(props) => props.level}%;
  animation: ${FullfillBar} 3s;
`;
