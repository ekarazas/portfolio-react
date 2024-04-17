import React from 'react';
import * as S from './Resume.style';
import ProfilePhoto from '../../assets/images/ProfileImage.jpg';
import experienceData from '../../utilities/experienceData';
import educationData from '../../utilities/educationData';
import BriefcaseIcon from '../../assets/icons/briefcase.svg';
import UniversityIcon from '../../assets/icons/university.svg';

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Resume = () => {
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
                <S.ColoredSpan>R</S.ColoredSpan>esume
              </S.Subtitle>
              <S.FirstRow>
                <S.FlexContainer>
                  <S.FirstColumn>
                    <S.SmallTitle>
                      <S.Icon src={BriefcaseIcon} alt="Briefcase" />
                      Experience
                    </S.SmallTitle>
                    {experienceData &&
                      experienceData.map((experience) => (
                        <S.ResumeItem key={experience.id}>
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
                      <S.Icon src={UniversityIcon} alt="university" />
                      Education
                    </S.SmallTitle>
                    {educationData &&
                      educationData.map((education) => (
                        <S.ResumeItem key={education.id}>
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
