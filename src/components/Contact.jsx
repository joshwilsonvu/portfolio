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
import { cx, css } from "emotion";
const { cta } = contact;
const { email, twitter, github, linkedin } = footer;

const Contact = () => (
  <section id="contact" className={cx(bgGradient, section)}>
    <div>
      <Title className={cx(szBig, white)}>{cta}</Title>
      <ul className={cx(listUnstyled, row, alignCenter)}>
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
          className={cx(
            column,
            padSmall,
            css`
              white-space: nowrap;
            `,
            button,
            buttonWhite
          )}
        >
          {<Icon className={szMid} />}
          <span> {info.handle || null}</span>
        </li>
      </a>
    </AutoFade>
  );
}
