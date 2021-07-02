import styled from "styled-components";

export const About = styled.main`
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

export const TextBlock = styled.div`
  margin-bottom: 1rem;
`;

export const SecondRow = styled.div``;

export const FirstColumn = styled.div`
  margin-bottom: 1rem;
  flex: 1;

  @media only screen and (min-width: 785px) {
    margin-bottom: 0;
    padding-right: 1rem;
    border-right: 0.05rem solid rgba(255, 255, 255, 0.3);
  }
`;

export const SmallTitle = styled.h3`
  margin: 0 0 1rem 0;
`;

export const ContactBlock = styled.div`
  margin-bottom: 0.5rem;
`;

export const ContactIcon = styled.img`
  height: 20px;
  margin-right: 0.5rem;
`;

export const Contact = styled.a`
  text-decoration: none;
  color: #131313;
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    &:hover {
      color: #00fff3;
    }

    &:hover ${ContactIcon} {
      filter: invert(73%) sepia(94%) saturate(598%) hue-rotate(109deg)
        brightness(106%) contrast(104%);
    }
  }
`;

export const SecondColumn = styled.div`
  flex: 1;

  @media only screen and (min-width: 785px) {
    padding-left: 1rem;
  }
`;

export const SkillColumn = styled.div`
  &:first-child {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 785px) {
    flex: 1;

    &:first-child {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 785px) {
    display: flex;
  }
`;
