import React from 'react';
import * as S from './About.style';
import ProfilePhoto from '../../assets/images/ProfileImage.jpg';
import languageSkills from '../../utilities/languageSkills';
import hardSkills from '../../utilities/hardSkills';
import softSkills from '../../utilities/softSkills';
import PhoneIcon from '../../assets/icons/phone.svg';
import EnvelopeIcon from '../../assets/icons/envelope.svg';

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import SkillsLevel from '../../components/SkillsLevel/SkillsLevel';

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
            <S.ContentBlock>
              <S.Subtitle>
                About <S.ColoredSpan>me</S.ColoredSpan>
              </S.Subtitle>
              <S.FirstRow>
                <S.TextBlock>
                  Passionate and goal-oriented individual with fresh knowledge
                  of front-end web development using one of most popular
                  libraries - <b>React.js</b>. I have above average skills of{' '}
                  <b>HTML</b>, <b>CSS</b> and
                  <b> JavaScript</b>. I also have intermediate knowledge of
                  <b> Node.js</b> environment and <b>MySQL</b> databases.
                  Furthermore, I have experience in the development platforms
                  such as <b>Digital Ocean</b> and <b>Firebase</b>.
                </S.TextBlock>
              </S.FirstRow>
              <S.SecondRow>
                <S.FlexContainer>
                  <S.FirstColumn>
                    <S.SmallTitle>Personal Information</S.SmallTitle>
                    <S.ContactBlock>
                      <S.Contact href="tel:+37064887747">
                        <S.ContactIcon src={PhoneIcon} alt="phone icon" />
                        +370 648 87747
                      </S.Contact>
                    </S.ContactBlock>
                    <S.ContactBlock>
                      <S.Contact href="mailto:eivinaskarazas@gmail.com">
                        <S.ContactIcon src={EnvelopeIcon} alt="email icon" />
                        eivinaskarazas@gmail.com
                      </S.Contact>
                    </S.ContactBlock>
                  </S.FirstColumn>
                  <S.SecondColumn>
                    <S.SmallTitle>Languages</S.SmallTitle>
                    {languageSkills &&
                      languageSkills.map((skill) => (
                        <SkillsLevel
                          key={skill.id}
                          skill={skill.language_skill}
                          level={skill.level}
                        />
                      ))}
                  </S.SecondColumn>
                </S.FlexContainer>
              </S.SecondRow>
            </S.ContentBlock>
            <S.ContentBlock>
              <S.Subtitle>
                <S.ColoredSpan>My</S.ColoredSpan> skills
              </S.Subtitle>
              <S.FlexContainer>
                <S.SkillColumn>
                  <S.SmallTitle>Hard skills</S.SmallTitle>
                  <S.StyledList>
                    {hardSkills &&
                      hardSkills.map((skill) => (
                        <S.StyledListItem key={skill.id}>
                          {skill.skill}
                        </S.StyledListItem>
                      ))}
                  </S.StyledList>
                </S.SkillColumn>
                <S.SkillColumn>
                  <S.SmallTitle>Soft skills</S.SmallTitle>
                  <S.StyledList>
                    {softSkills &&
                      softSkills.map((skill) => (
                        <S.StyledListItem key={skill.skill}>
                          {skill.skill}
                        </S.StyledListItem>
                      ))}
                  </S.StyledList>
                </S.SkillColumn>
              </S.FlexContainer>
            </S.ContentBlock>
          </S.RightCard>
        </S.RightBlock>
      </S.Section>
    </S.About>
  );
};

export default About;
