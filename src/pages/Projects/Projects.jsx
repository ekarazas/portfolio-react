import React, { useState, useEffect } from "react";
import * as S from "./Projects.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProfilePhoto from "../../assets/Photo.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://206.81.27.119:1337/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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
                  <ProjectCard portfolio={projects} />
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
