import React from "react";
import * as S from "./About.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePhoto from "../../assets/Photo.jpg";

const About = () => {
  return (
    <S.About>
      <S.Section>
        <S.LeftBlock>
          <ProfileCard
            profileImage={ProfilePhoto}
            name="Eivinas Karažas"
            career="Front-end developer"
          ></ProfileCard>
        </S.LeftBlock>
        <div className="right-side-container">
          <div className="rightside-card">
            <a href="www.youtube.com">
              <div>DOWNLOAD CV</div>
            </a>
          </div>
        </div>
      </S.Section>
    </S.About>
  );
};

export default About;
