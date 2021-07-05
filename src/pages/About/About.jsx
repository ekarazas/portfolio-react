import React, { useState, useEffect } from "react";
import * as S from "./About.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePhoto from "../../assets/Photo.jpg";

import SkillsLevel from "../../components/SkillsLevel/SkillsLevel";

const About = () => {
  const [workingSkills, setWorkingSkills] = useState([]);
  const [softwareSkills, setSoftwareSkills] = useState([]);
  const [languageSkills, setLanguageSkills] = useState([]);

  useEffect(() => {
    fetch("http://206.81.27.119:1337/working-skills")
      .then((res) => res.json())
      .then((data) => setWorkingSkills(data));
  }, []);

  useEffect(() => {
    fetch("http://206.81.27.119:1337/software-skills")
      .then((res) => res.json())
      .then((data) => setSoftwareSkills(data));
  }, []);

  useEffect(() => {
    fetch("http://206.81.27.119:1337/language-skills")
      .then((res) => res.json())
      .then((data) => setLanguageSkills(data));
  }, []);

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
                  of front-end web development using popular libraries and
                  frameworks like <b>React</b>, <b>Vue.js</b>. I have above
                  average skills of <b>HTML</b>, <b>CSS</b> and
                  <b> JavaScript</b>. I also have intermediate knowledge of
                  <b> Node.js</b> environment and <b>MySQL</b> databases.
                  Furthermore, I have experience working with development
                  platforms such as <b>Digital Ocean</b> and <b>Firebase</b>.
                </S.TextBlock>
              </S.FirstRow>
              <S.SecondRow>
                <S.FlexContainer>
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
                  <S.SmallTitle>Working skills</S.SmallTitle>
                  {workingSkills &&
                    workingSkills.map((workingSkill) => (
                      <SkillsLevel
                        key={workingSkill.id}
                        skill={workingSkill.skill}
                        level={workingSkill.level}
                      />
                    ))}
                </S.SkillColumn>
                <S.SkillColumn>
                  <S.SmallTitle>Software skills</S.SmallTitle>
                  {softwareSkills &&
                    softwareSkills.map((skill) => (
                      <SkillsLevel
                        key={skill.id}
                        skill={skill.skill}
                        level={skill.level}
                      />
                    ))}
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
