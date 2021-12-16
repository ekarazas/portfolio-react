import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  padding: 2rem 2.4rem 0;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    padding: 2rem 3.5rem 0;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  border-radius: 0.5rem;
  margin: 0 auto;
  height: 15rem;
  width: 12rem;
  top: -4rem;
  box-shadow: 0 0.5rem 7rem rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: top;
  vertical-align: middle;
`;

export const ContentBlock = styled.div`
  position: relative;
  top: -2rem;
`;

export const NameTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;

  @media only screen and (min-width: 786px) {
    font-size: 1.4rem;
  }
`;

export const CareerTitle = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media only screen and (min-width: 786px) {
    font-size: 1rem;
  }
`;

export const ContactsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContactIcons = styled.img`
  height: 1.5rem;
  padding: 0.2rem;
`;

export const Contacts = styled.a`
  text-decoration: none;
  color: #131313;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 786px) {
    font-size: 0.95rem;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      color: #00fff3;
    }

    &:hover ${ContactIcons} {
      filter: invert(94%) sepia(68%) saturate(6075%) hue-rotate(92deg)
        brightness(108%) contrast(101%);
    }
  }
`;

export const ProfileFooter = styled.div`
  border-top: 0.05rem solid rgba(255, 255, 255, 0.5);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.7rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 4.8rem;
  }
`;

export const FooterIcon = styled.img`
  margin-top: -0.25rem;
  height: 1.2rem;
`;

export const FooterLink = styled.a`
  width: 100%;
  text-decoration: none;
  color: #131313;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;

  @media only screen and (min-width: 786px) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      color: #00fff3;
    }

    &:hover ${FooterIcon} {
      filter: invert(94%) sepia(68%) saturate(6075%) hue-rotate(92deg)
        brightness(108%) contrast(101%);
    }
  }
`;

export const FooterText = styled.div`
  font-weight: 700;
  margin-right: 0.5rem;
`;
