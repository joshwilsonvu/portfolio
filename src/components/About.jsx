import React from "react";
import { AutoFade, Title } from "./animations";
import AboutImg from "./AboutImg";
import { about } from "../data";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */
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
    <section id="about" css={css([section, bgGradient])}>
      <Title css={css([white, szBig])}>About Me</Title>
      <div css={css([row, mainCenter])}>
        <AutoFade dir="left" css={css([column, flex0])}>
          <AboutImg alt="profile picture" filename={img} />
        </AutoFade>
        {/* <div css={spacer} /> */}
        <AutoFade
          dir="right"
          css={css([
            column,
            textLeft,
            padSmall,
            readingWidth,
            css`
              overflow: wrap;
            `,
          ])}
        >
          {paragraphs.map((text, i) => (
            <p key={i} css={css([szNormal, white])}>
              {text}
            </p>
          ))}
          {resume && (
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                css={css([button, buttonWhite])}
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
