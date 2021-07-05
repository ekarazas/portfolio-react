import React from "react";
import * as S from "./ProfileCard.style";
import CV from "../../assets/downloads/EivinasCV_2021-06-26.pdf";

const ProfileCard = ({ profileImage, name, career }) => {
  return (
    <S.Card>
      <S.ImageBlock>
        <S.Image src={profileImage} />
      </S.ImageBlock>
      <S.ContentBlock>
        <S.NameTitle>{name}</S.NameTitle>
        <S.CareerTitle>{career}</S.CareerTitle>
        <S.ContactsBlock>
          <S.Contacts
            href="https://www.linkedin.com/in/eivinas-kara%C5%BEas-a764361ba/"
            target="_blank"
          >
            <S.ContactIcons
              src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
              alt="LinkedIn Logo"
            />
            Linkedin
          </S.Contacts>
          <S.Contacts href="https://github.com/ekarazas" target="_blank">
            <S.ContactIcons
              src="https://image.flaticon.com/icons/png/512/733/733609.png"
              alt="GitHub Logo"
            />
            GitHub
          </S.Contacts>
        </S.ContactsBlock>
      </S.ContentBlock>
      <S.ProfileFooter>
        <S.FooterLink href={CV} download>
          <S.FooterText>DOWNLOAD CV</S.FooterText>
          <S.FooterIcon
            src="https://image.flaticon.com/icons/png/512/3580/3580085.png"
            alt="Download icon"
          />
        </S.FooterLink>
      </S.ProfileFooter>
    </S.Card>
  );
};

export default ProfileCard;
