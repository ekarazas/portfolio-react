import styled from "styled-components";

export const Projects = styled.main`
  min-height: calc(100vh - 8rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;

  @media only screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
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

  @media only screen and (min-width: 375px) {
    margin: 0 2rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 1rem 0 2rem;
  }
`;

export const RightBlock = styled.div`
  position: relative;
  margin: 0 1rem;
  overflow: hidden;
  border-radius: 0.5rem;

  @media only screen and (min-width: 375px) {
    margin: 0 2rem;
  }

  @media only screen and (min-width: 1024px) {
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

export const Subtitle = styled.h2`
  margin-bottom: 2rem;
`;

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
