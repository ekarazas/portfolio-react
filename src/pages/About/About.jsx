import React from 'react';
import EnvelopeIcon from '../../assets/icons/envelope.svg?react';
import PhoneIcon from '../../assets/icons/phone.svg?react';
import ProfilePhoto from '../../assets/images/ProfileImage.jpg';
import hardSkills from '../../utilities/hardSkills';
import languageSkills from '../../utilities/languageSkills';
import softSkills from '../../utilities/softSkills';
import * as S from './About.style';

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
            name='Eivinas Karažas'
            career='Front-end developer'
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
                  Passionate and goal-driven front-end web developer with nearly
                  3 years of experience building complex web applications using
                  <b> React.js</b>. Proficient in <b>HTML</b>, <b>CSS</b>,
                  <b> JavaScript</b> and <b>TypeScript</b>, with experience in
                  tools like <b>React Query</b>, <b>Zustand</b>,
                  <b> Material UI</b> and <b>Vitest</b>. Skilled in creating
                  interactive interfaces using <b>Konva.js</b> and optimizing
                  form management with <b>React Hook Forms</b>.
                </S.TextBlock>
                <S.TextBlock>
                  Although my recent focus has been on front-end technologies, I
                  bring foundational experience with <b>Node.js</b>,
                  <b> MySQL</b>, <b>Digital Ocean</b> that can be refreshed as
                  needed.
                </S.TextBlock>
              </S.FirstRow>
              <S.SecondRow>
                <S.FlexContainer>
                  <S.FirstColumn>
                    <S.SmallTitle>Personal Information</S.SmallTitle>
                    <S.ContactBlock>
                      <S.Contact href='tel:+37064887747'>
                        <S.ContactIcon src={PhoneIcon} alt='phone icon' />
                        +370 648 87747
                      </S.Contact>
                    </S.ContactBlock>
                    <S.ContactBlock>
                      <S.Contact href='mailto:developer.eivinas@gmail.com'>
                        <S.ContactIcon src={EnvelopeIcon} alt='email icon' />
                        developer.eivinas@gmail.com
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
