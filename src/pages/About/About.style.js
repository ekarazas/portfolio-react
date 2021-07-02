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
  text-align: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const LeftBlock = styled.div`
  position: relative;
  margin: 0 1rem 1rem;

  @media only screen and (min-width: 350px) {
    margin: 0 2rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const RightBlock = styled.div`
  position: relative;
  margin: 0 1rem;

  @media only screen and (min-width: 350px) {
    margin: 0 2rem;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const RightCard = styled.div`
  text-align: left;
  border-radius: 0.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  padding: 2rem;
  box-shadow: 0.6rem 0.6rem 11rem rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.h2``;

export const ColoredSpan = styled.span`
  color: #00fff3;
`;

export const FirstRow = styled.div`
  margin-bottom: 1rem;
`;

export const TextBlock = styled.div``;

export const SecondRow = styled.div``;

export const FirstColumn = styled.div`
  margin-bottom: 1rem;
`;

export const SmallTitle = styled.div`
  font-weight: 700;
  margin: 1rem 0;
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

export const SecondColumn = styled.div``;
