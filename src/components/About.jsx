import React from "react";
import { AutoFade, Title } from "./animations";
import AboutImg from "./AboutImg";
import Divider from "./Divider";
import { about } from "../data";
import { css, cx } from "emotion";
import {
  bgGradient,
  mainCenter,
  textLeft,
  flex0,
  white,
  szNormal,
  szBig,
  padSmall,
  row,
  column,
  section,
  button,
  buttonWhite,
  readingWidth,
} from "../style";
const { img, paragraphs, resume } = about;

const About = () => {
  return (
    <section id="about" className={cx(section, bgGradient)}>
      <Title className={cx(white, szBig)}>About Me</Title>
      <div className={cx(row, mainCenter)}>
        <AutoFade dir="left" className={cx(column, flex0)}>
          <AboutImg alt="profile picture" filename={img} />
        </AutoFade>
        {/* <div className={spacer} /> */}
        <AutoFade
          dir="right"
          className={cx(
            column,
            textLeft,
            padSmall,
            readingWidth,
            css`
              overflow: wrap;
            `
          )}
        >
          {paragraphs.map((text, i) => (
            <p key={i} className={cx(szNormal, white)}>
              {text}
            </p>
          ))}
          {resume && (
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={cx(button, buttonWhite)}
                href={resume}
              >
                View Resume
              </a>
            </div>
          )}
        </AutoFade>
      </div>
    </section>
  );
};

export default About;
