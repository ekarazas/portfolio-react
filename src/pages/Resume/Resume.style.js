import styled from "styled-components";

export const Resume = styled.main`
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
  margin-bottom: 2rem;
  flex: 1;

  @media only screen and (min-width: 785px) {
    margin-bottom: 0;
    padding-right: 1rem;
    border-right: 0.05rem solid rgba(255, 255, 255, 0.3);
  }
`;

export const SmallTitle = styled.h3`
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  color: #00fff3;
  border: 0.05rem solid #00fff3;
  display: inline-block;
  font-size: 0.8rem;
  line-height: 1.1rem;
  padding: 0.1rem 0.4rem;
  border-radius: 0.5rem;
  margin-bottom: 0.7rem;
`;

export const ResumeItem = styled.div`
  margin-bottom: 1.5rem;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

export const InstituteName = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
`;

export const Location = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.7rem;
`;

export const Icon = styled.img`
  height: 1.5rem;
  padding: 0.2rem;
`;

export const SecondColumn = styled.div`
  flex: 1;
  @media only screen and (min-width: 785px) {
    padding-left: 1rem;
  }
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 785px) {
    display: flex;
  }
`;
