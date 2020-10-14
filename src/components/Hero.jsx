import React, { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { css, jsx, ClassNames } from "@emotion/core";
/* @jsx jsx */
import {
  fullHeight,
  bgWhite,
  padBig,
  black,
  szBig,
  bottom,
  section,
  flex1,
  gradient,
  szTap,
} from "../style";
import { TypeIt, Fade } from "./animations";
import Toggle from "./Toggle";
import { hero } from "../data";
import { useIsDesktop } from "../hooks/useMediaQuery";

const { name, makeThings } = hero;

const now = Date.now(); // makes things easier in dev
const Hero = () => {
  const isDesktop = useIsDesktop();
  const [finished, setFinished] = useState(false);

  return (
    <>
      <Toggle />
      <section id="hero" key={now} css={css([section, fullHeight, bgWhite])}>
        <div
          css={css([
            padBig,
            css`
              margin-top: 25vh;
            `,
          ])}
        >
          <ClassNames>
            {({ css: vanillaCss }) => {
              const gradientClass = vanillaCss(gradient);
              return (
                <TypeIt
                  reducedMotion={reducedMotion}
                  css={css([black, szBig])}
                  element="h1"
                  options={{
                    speed: 80,
                    deleteSpeed: 50,
                    afterComplete: async (_, instance) => {
                      setFinished(true);
                      instance.destroy();
                    },
                  }}
                  getBeforeInit={(instance) => {
                    setFinished(false);
                    return typeItInit(instance, isDesktop, gradientClass);
                  }}
                />
              );
            }}
          </ClassNames>
        </div>
        <div aria-hidden="true" css={css([bottom, flex1])}>
          <Fade visible={finished} dir="top">
            <div css={css([black, szTap, padBig])}>
              <FaArrowAltCircleDown
                title="See more"
                css={css`
                  cursor: pointer;
                `}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    smooth: true,
                    block: isDesktop ? "center" : "start",
                  });
                }}
              />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Hero;

function typeItInit(instance, isDesktop, gradientClass) {
  const withCode = ` with code. `;
  const delay = 500;
  const interval = 1250;
  instance.type(`Hi! `, { delay });
  instance.type(`I'm <span class="${gradientClass}">${name}</span>.`, {
    delay,
  });
  if (makeThings.length) {
    instance.break();
    instance.type(`I make ${makeThings[0]}`);
    if (!isDesktop) {
      instance.break();
    }
    instance.type(`${withCode}`);
    instance.pause(delay);
    instance.move(-(withCode.length + !isDesktop));
    for (let i = 1; i < makeThings.length; ++i) {
      instance.delete(makeThings[i - 1].length);
      if (i < makeThings.length - 1) {
        instance.type(makeThings[i]);
        instance.pause(interval);
      }
    }
  }
  instance.type(
    `<span class="${gradientClass}">${makeThings[makeThings.length - 1]}</span>`
  );
  instance.move("END", { delay });
  return instance;
}

const reducedMotion = (
  <h1 css={css([black, szBig])}>
    Hi! I'm <span css={gradient}>{name}</span>.
    <br />I make{" "}
    <span
      dangerouslySetInnerHTML={{ __html: makeThings[makeThings.length - 1] }}
    />{" "}
    with code.{" "}
  </h1>
);
