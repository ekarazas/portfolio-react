import React from "react";
import * as S from "./ProjectCard.style";

function ProjectCard({ projects }) {
  return (
    <S.FlexBlock projects={projects}>
      {!projects && "There are no projects yet."}
      {projects &&
        projects.map((project) => (
          <S.Container
            key={project.id}
            className={project.id % 2 === 0 ? "margin-left" : "margin-right"}
          >
            <S.Image
              className={
                project.id % 2 === 0 ? "translate-left" : "translate-right"
              }
              src={project.image}
            />
            <S.CardContent>
              <S.Title>{project.title}</S.Title>
              {project.url && (
                <S.SocialLink href={project.url} target="_blank">
                  <S.FlexLink>
                    <S.Icon className="website" />
                    Check the website
                  </S.FlexLink>
                </S.SocialLink>
              )}

              {project.front_url && (
                <S.SocialLink href={project.front_url} target="_blank">
                  <S.FlexLink>
                    <S.Icon className="github" />
                    GitHub Frontend
                  </S.FlexLink>
                </S.SocialLink>
              )}

              {project.back_url && (
                <S.SocialLink href={project.back_url} target="_blank">
                  <S.FlexLink>
                    <S.Icon className="github" />
                    GitHub Backend
                  </S.FlexLink>
                </S.SocialLink>
              )}
            </S.CardContent>
          </S.Container>
        ))}
    </S.FlexBlock>
  );
}

export default ProjectCard;
