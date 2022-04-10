import React from "react";
import * as S from "./ProfileCard.style";
import CV from "../../assets/downloads/Eivinas_Karažas_CV2022.pdf";

//icons
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import download from "../../assets/icons/download.svg";

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
            <S.ContactIcons src={linkedin} alt="LinkedIn Logo" />
            Linkedin
          </S.Contacts>
          <S.Contacts href="https://github.com/ekarazas" target="_blank">
            <S.ContactIcons src={github} alt="GitHub Logo" />
            GitHub
          </S.Contacts>
        </S.ContactsBlock>
      </S.ContentBlock>
      <S.ProfileFooter>
        <S.FooterLink href={CV} target="_blank" download>
          <S.FooterText>DOWNLOAD CV</S.FooterText>
          <S.FooterIcon src={download} alt="Download icon" />
        </S.FooterLink>
      </S.ProfileFooter>
    </S.Card>
  );
};

export default ProfileCard;
