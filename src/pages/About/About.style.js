import styled from "styled-components";

export const About = styled.main`
  margin-top: 6rem;
  margin-bottom: 6rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LeftBlock = styled.div`
  min-width: 90%;

  @media only screen and (min-width: 1024px) {
    min-width: 19rem;
    margin: 0;
  }
`;
