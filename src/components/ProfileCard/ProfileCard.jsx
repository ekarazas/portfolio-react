import React from 'react';
import * as S from './ProfileCard.style';
import CV from '../../assets/downloads/Eivinas_Karažas_2021-07-22.pdf';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import GithubIcon from '../../assets/icons/github.svg';
import DownloadIcon from '../../assets/icons/download.svg';

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
            <S.ContactIcons src={LinkedinIcon} alt="LinkedIn Logo" />
            Linkedin
          </S.Contacts>
          <S.Contacts href="https://github.com/ekarazas" target="_blank">
            <S.ContactIcons src={GithubIcon} alt="GitHub Logo" />
            GitHub
          </S.Contacts>
        </S.ContactsBlock>
      </S.ContentBlock>
      <S.ProfileFooter>
        <S.FooterLink href={CV} target="_blank" download>
          <S.FooterText>DOWNLOAD CV</S.FooterText>
          <S.FooterIcon src={DownloadIcon} alt="Download icon" />
        </S.FooterLink>
      </S.ProfileFooter>
    </S.Card>
  );
};

export default ProfileCard;
