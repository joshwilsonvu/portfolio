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
          align-items: start;
          justify-content: center;
        `,
      ])}
    >
      <AutoFade
        dir={isDesktop ? "left" : "bottom"}
        css={css([column, readingWidth, { marginBottom: "4rem" }])}
      >
        <div css={black}>
          <h2 css={css([szMid, { marginBottom: "1rem" }])}>{title}</h2>
          <div
            css={css`
              margin-bottom: 2rem;
              margin-right: 1rem;
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

      <AutoFade
        dir={isDesktop ? "left" : "bottom"}
        css={css([column, flex0, { width: "100%", marginBottom: "1rem" }])}
      >
        <a
          href={url || repo || "#!"}
          target="_blank"
          aria-label="Project Link"
          rel="noopener noreferrer"
        >
          <ProjectImg alt={title} filename={img} />
        </a>
      </AutoFade>
    </div>
  );
}

export default Projects;
