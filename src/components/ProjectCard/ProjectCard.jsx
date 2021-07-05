import React from "react";
import * as S from "./ProjectCard.style";

function ProjectCard({ portfolio }) {
  return (
    <S.FlexBlock projects={portfolio}>
      {!portfolio && "There are no projects yet."}
      {portfolio &&
        portfolio.map((project) => (
          <S.Container
            key={project.id}
            className={project.id % 2 === 0 ? "margin-left" : "margin-right"}
          >
            <S.Image
              className={
                project.id % 2 === 0 ? "translate-left" : "translate-right"
              }
              src={
                "http://206.81.27.119:1337" + project.image.formats.large.url
              }
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

              <S.SocialLink href={project.front_url} target="_blank">
                <S.FlexLink>
                  <S.Icon className="github" />
                  GitHub Frontend
                </S.FlexLink>
              </S.SocialLink>
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
