import React from "react";
import * as S from "./About.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePhoto from "../../assets/Photo.jpg";

import SkillsLevel from "../../components/SkillsLevel/SkillsLevel";

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
        <S.RightBlock>
          <S.RightCard>
            <div className="section1">
              <S.Subtitle>
                About <S.ColoredSpan>me</S.ColoredSpan>
              </S.Subtitle>
              <S.FirstRow>
                <S.TextBlock>
                  I am Ryan Adlard, web designer from USA, California. I have
                  rich experience in web site design and building and
                  customization, also I am good at wordpress. I love to talk
                  with you about our unique.
                </S.TextBlock>
              </S.FirstRow>
              <S.SecondRow>
                <S.FirstColumn>
                  <S.SmallTitle>Personal Information</S.SmallTitle>
                  <S.ContactBlock>
                    <S.Contact href="tel:+37064887747">
                      <S.ContactIcon
                        src="https://image.flaticon.com/icons/png/512/15/15874.png"
                        alt="phone icon"
                      />
                      +370 648 87747
                    </S.Contact>
                  </S.ContactBlock>
                  <S.ContactBlock>
                    <S.Contact href="mailto:eivinaskarazas@gmail.com">
                      <S.ContactIcon
                        src="https://image.flaticon.com/icons/png/512/16/16475.png"
                        alt="letter icon"
                      />
                      eivinaskarazas@gmail.com
                    </S.Contact>
                  </S.ContactBlock>
                </S.FirstColumn>
                <S.SecondColumn>
                  <S.SmallTitle>Languages</S.SmallTitle>
                  <SkillsLevel skill="English" level="80" />
                  <SkillsLevel skill="Lithuanian (native)" level="100" />
                </S.SecondColumn>
              </S.SecondRow>
            </div>
          </S.RightCard>
        </S.RightBlock>
      </S.Section>
    </S.About>
  );
};

export default About;
