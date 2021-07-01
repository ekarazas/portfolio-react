import styled from "styled-components";

export const About = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LeftBlock = styled.div`
  min-width: 15rem;

  @media only screen and (min-width: 1120px) {
    min-width: 19rem;
    margin: 0;
  }
`;
