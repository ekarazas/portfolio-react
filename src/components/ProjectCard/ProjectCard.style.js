import styled from "styled-components";

export const FlexBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  width: calc(50% - 0.5rem);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 1rem;
  box-sizing: border-box;

  @media only screen and (max-width: 785px) {
    width: 100%;
  }

  @media only screen and (min-width: 780px) {
    &.margin-left {
      margin-left: 0.5rem;
    }
    &.margin-right {
      margin-right: 0.5rem;
    }
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  background-size: cover;
  margin-right: 0.5rem;
  &.github {
    background-image: url("https://image.flaticon.com/icons/png/512/733/733609.png");
  }
  &.website {
    background-image: url("https://image.flaticon.com/icons/png/512/13/13706.png");
  }
`;

export const Image = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 14rem;
  object-fit: cover;
  object-position: top;
  opacity: 1;
  transition: transform 0.25s ease;
  @media only screen and (min-width: 1024px) {
    &:hover {
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      -ms-transition: all 0.3s ease-in;
      -o-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      &&.translate-left {
        transform: translatex(-30%) scale(1.6);
        -ms-transform: translatex(-30%) scale(1.6);
        -webkit-transform: translatex(-30%) scale(1.6);
      }
      &&.translate-right {
        transform: translatex(30%) scale(1.6);
        -ms-transform: translatex(30%) scale(1.6);
        -webkit-transform: translatex(30%) scale(1.6);
      }
    }
  }
`;

export const SocialLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #131313;
  @media only screen and (min-width: 1024px) {
    &:hover {
      color: #00fff3;
    }

    &:hover ${Icon} {
      filter: invert(73%) sepia(94%) saturate(598%) hue-rotate(109deg)
        brightness(106%) contrast(104%);
    }
  }
`;

export const FlexLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CardContent = styled.div`
  padding: 1rem 0.5rem;
`;