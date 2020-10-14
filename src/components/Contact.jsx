import React from "react";
import { AutoFade, Title } from "./animations";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact, footer } from "../data";
import {
  bgGradient,
  section,
  white,
  alignCenter,
  szMid,
  szBig,
  padSmall,
  listUnstyled,
  row,
  column,
  button,
  buttonWhite,
} from "../style";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */
const { cta } = contact;
const { email, twitter, github, linkedin } = footer;

const Contact = () => (
  <section
    id="contact"
    css={css([bgGradient, section, { position: "relative" }])}
  >
    <div>
      <Title css={css([szBig, white])}>{cta}</Title>
      <ul css={css([listUnstyled, row, alignCenter])}>
        {email && <SocialLink info={email} name="email" icon={FaEnvelope} />}
        {twitter && (
          <SocialLink info={twitter} name="twitter" icon={FaTwitter} />
        )}
        {github && <SocialLink info={github} name="github" icon={FaGithub} />}
        {linkedin && (
          <SocialLink info={linkedin} name="linkedin" icon={FaLinkedin} />
        )}
      </ul>
    </div>
    <Copyright />
  </section>
);

export default Contact;

function SocialLink({ info, name, icon }) {
  const Icon = icon;
  return (
    <AutoFade>
      <a
        href={info.href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={name}
      >
        <li
          css={css([
            column,
            padSmall,
            css`
              white-space: nowrap;
            `,
            button,
            buttonWhite,
          ])}
        >
          {<Icon css={szMid} />}
          <span> {info.handle || null}</span>
        </li>
      </a>
    </AutoFade>
  );
}

const currentYear = new Date().getFullYear();
const years = currentYear === 2020 ? "2020" : `2020 - ${currentYear}`;

function Copyright() {
  return (
    <footer
      css={css([
        white,
        css`
          text-align: center;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 0.75rem;
        `,
      ])}
    >
      <p
        css={css`
          margin-bottom: 0.5rem;
        `}
      >
        &copy; Copyright {years} Josh Wilson
      </p>
    </footer>
  );
}
