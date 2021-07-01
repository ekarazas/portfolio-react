import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  padding: 2rem 1.9rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0.6rem 0.6rem 11rem rgba(0, 0, 0, 0.5);
`;

export const ImageBlock = styled.div`
  position: relative;
  border-radius: 0.5rem;
  margin: 0 auto;
  height: 15rem;
  width: 12rem;
  top: -4rem;
  box-shadow: 0 0.2rem 11rem rgba(0, 0, 0, 0.5);
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
`;

export const CareerTitle = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const ContactsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const Contacts = styled.a`
  text-decoration: none;
  color: #131313;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const ContactIcons = styled.img`
  height: 1.5rem;
  padding: 0.2rem;
`;

export const ProfileFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  border-top: 0.05rem solid #112537;
`;

export const FooterLink = styled.a`
  padding: 1.5rem 1rem;
  text-decoration: none;
  color: #131313;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.div`
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const FooterIcon = styled.img`
  height: 1.3rem;
`;
