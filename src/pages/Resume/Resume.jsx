import React, { useEffect, useState } from "react";
import * as S from "./Resume.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePhoto from "../../assets/Photo.jpg";

const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("http://206.81.27.119:1337/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  useEffect(() => {
    fetch("http://206.81.27.119:1337/educations")
      .then((res) => res.json())
      .then((data) => setEducations(data));
  }, []);

  return (
    <S.Resume>
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
                <S.ColoredSpan>Re</S.ColoredSpan>sume
              </S.Subtitle>
              <S.FirstRow>
                <S.FlexContainer>
                  <S.FirstColumn>
                    <S.SmallTitle>
                      <S.Icon
                        src="https://image.flaticon.com/icons/png/512/2630/2630088.png"
                        alt="Briefcase"
                      />
                      Experience
                    </S.SmallTitle>
                    {experiences &&
                      experiences.map((experience) => (
                        <S.ResumeItem>
                          <S.Date>{experience.year}</S.Date>
                          <S.Name>{experience.title}</S.Name>
                          <S.InstituteName>
                            {experience.companyName}
                          </S.InstituteName>
                          <S.Location>{experience.location}</S.Location>
                          <S.TextBlock>{experience.description}</S.TextBlock>
                        </S.ResumeItem>
                      ))}
                  </S.FirstColumn>
                  <S.SecondColumn>
                    <S.SmallTitle>
                      <S.Icon
                        src="https://image.flaticon.com/icons/png/512/3604/3604021.png"
                        alt="university"
                      />
                      Education
                    </S.SmallTitle>
                    {educations &&
                      educations.map((education) => (
                        <S.ResumeItem>
                          <S.Date>{education.year}</S.Date>
                          <S.Name>{education.degreeTitle}</S.Name>
                          <S.InstituteName>
                            {education.institute}
                          </S.InstituteName>
                          <S.Location>{education.location}</S.Location>
                          <S.TextBlock>{education.degree}</S.TextBlock>
                        </S.ResumeItem>
                      ))}
                  </S.SecondColumn>
                </S.FlexContainer>
              </S.FirstRow>
            </S.ContentBlock>
          </S.RightCard>
        </S.RightBlock>
      </S.Section>
    </S.Resume>
  );
};

export default Resume;
