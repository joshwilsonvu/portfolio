import React from "react";
import Tilt from "react-tilt";
//import { Container, Row, Col } from "react-bootstrap";
import { cx, css } from "emotion";
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
    <section id="projects" className={cx(bgWhite, section)}>
      <div>
        <Title className={cx(black, szBig)}>Projects</Title>
        {projectElements}
      </div>
    </section>
  );
};

function Project({ project }) {
  const isDesktop = useIsDesktop();
  const { title, paragraphs, url, repo, img } = project;

  return (
    <div className={row}>
      <AutoFade
        dir={isDesktop ? "left" : "bottom"}
        className={cx(column, readingWidth)}
      >
        <div className={cx(padBig, black)}>
          <h3 className={szMid}>{title}</h3>
          <div
            className={css`
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
              className={cx(button, buttonBlack)}
              href={url}
            >
              View Live
            </a>
          )}

          {repo && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cx(button, buttonBlack)}
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
          className={cx(column, flex0)}
        >
          <ProjectImg alt={title} filename={img} />
        </AutoFade>
      </a>
    </div>
  );
}

export default Projects;
