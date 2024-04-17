import React from "react";
import * as S from "./Projects.style";
import projectsData from "../../utilities/projectsData";
import ProfilePhoto from "../../assets/images/ProfileImage.jpg";

// components
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <S.Projects>
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
                <S.ColoredSpan>My </S.ColoredSpan>projects
              </S.Subtitle>
              <S.FirstRow>
                <S.FlexContainer>
                  <ProjectCard projects={projectsData} />
                </S.FlexContainer>
              </S.FirstRow>
            </S.ContentBlock>
          </S.RightCard>
        </S.RightBlock>
      </S.Section>
    </S.Projects>
  );
};

export default Projects;
