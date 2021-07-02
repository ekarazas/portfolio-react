import styled from "styled-components";

export const Projects = styled.main`
  margin-top: 6rem;
  margin-bottom: 6rem;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1100px) {
    width: 1100px;
    margin: 6rem auto;
  }
`;

export const Section = styled.section`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftBlock = styled.div`
  position: relative;
  margin: 0 1rem 1rem;

  @media only screen and (min-width: 350px) {
    margin: 0 2rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 0 0 2rem;
  }
`;

export const RightBlock = styled.div`
  position: relative;
  margin: 0 1rem;
  overflow: hidden;
  border-radius: 0.5rem;

  @media only screen and (min-width: 350px) {
    margin: 0 2rem;
  }

  @media only screen and (min-width: 1024px) {
    border-radius: 0 0.5rem 0.5rem 0;

    margin: 0 2rem 0 0;
  }
`;

export const RightCard = styled.div`
  text-align: left;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  padding: 2rem;

  @media only screen and (min-width: 1024px) {
    height: 28rem;
    overflow-y: scroll;
  }
`;

export const ContentBlock = styled.section`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 785px) {
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.h2``;

export const ColoredSpan = styled.span`
  color: #00fff3;
`;

export const FirstRow = styled.div`
  margin-bottom: 1rem;
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 785px) {
  }
`;
