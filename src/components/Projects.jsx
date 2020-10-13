import React from "react";
import Tilt from "react-tilt";
//import { Container, Row, Col } from "react-bootstrap";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */
import {
  column,
  bgWhite,
  black,
  szMid,
  szBig,
  button,
  buttonBlack,
  padBig,
  row,
  section,
  flex0,
  readingWidth,
} from "../style";
import { AutoFade, Title } from "./animations";
import ProjectImg from "./ProjectImg";
import { projects } from "../data";
import { useIsDesktop } from "../hooks/useMediaQuery";

const projectElements = projects.map((project) => (
  <Project key={project.id} project={project} />
));

const Projects = () => {
  return (
    <section id="projects" css={css([bgWhite, section])}>
      <div>
        <Title css={css([black, szBig])}>Projects</Title>
        {projectElements}
      </div>
    </section>
  );
};

function Project({ project }) {
  const isDesktop = useIsDesktop();
  const { title, paragraphs, url, repo, img } = project;

  return (
    <div
      css={css([
        row,
        // Picture should be to the right on desktop but above on mobile
        css`
          flex-wrap: wrap-reverse;
        `,
      ])}
    >
      <AutoFade
        dir={isDesktop ? "left" : "bottom"}
        css={css([column, readingWidth])}
      >
        <div css={css([padBig, black])}>
          <h3 css={szMid}>{title}</h3>
          <div
            css={css`
              margin-bottom: 4rem;
            `}
          >
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          {url && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              css={css([button, buttonBlack])}
              href={url}
            >
              View Live
            </a>
          )}

          {repo && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              css={css([button, buttonBlack])}
              href={repo}
            >
              Source Code
            </a>
          )}
        </div>
      </AutoFade>
      <a
        href={url || "#!"}
        target="_blank"
        aria-label="Project Link"
        rel="noopener noreferrer"
      >
        <AutoFade
          dir={isDesktop ? "left" : "bottom"}
          css={css([column, flex0])}
        >
          <ProjectImg alt={title} filename={img} />
        </AutoFade>
      </a>
    </div>
  );
}

export default Projects;
