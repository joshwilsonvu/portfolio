import React, { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { css, cx } from "emotion";
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
} from "../style";
import { TypeIt, Fade } from "./animations";
import Toggle from "./Toggle";
import { hero } from "../data";
import { useIsDesktop } from "../hooks/useMediaQuery";

const { name, makeThings } = hero;

const now = Date.now();
const Hero = () => {
  const isDesktop = useIsDesktop();
  const [finished, setFinished] = useState(false);

  return (
    <>
      <Toggle />
      <section id="hero" key={now} className={cx(section, fullHeight, bgWhite)}>
        <div
          className={cx(
            padBig,
            css`
              margin-top: 25vh;
            `
          )}
        >
          <TypeIt
            reducedMotion={reducedMotion}
            className={cx(black, szBig)}
            element="h1"
            options={{
              speed: 80,
              deleteSpeed: 50,
              afterComplete: async () => setFinished(true),
            }}
            getBeforeInit={(instance) => typeItInit(instance, isDesktop)}
          />
        </div>
        <div aria-hidden="true" className={cx(bottom, flex1)}>
          <Fade
            visible={finished}
            dir="top"
            className={cx(black, szBig, padBig)}
          >
            <FaArrowAltCircleDown
              className={css`
                cursor: pointer;
              `}
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  smooth: true,
                  block: isDesktop ? "center" : "start",
                });
              }}
            />
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Hero;

function typeItInit(instance, isDesktop) {
  const withCode = ` with code. `;
  const delay = 500;
  const interval = 1250;
  instance.type(`Hi! `, { delay });
  instance.type(`I'm <span class="${gradient}">${name}</span>.`, {
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
    `<span class="${gradient}">${makeThings[makeThings.length - 1]}</span>`
  );
  instance.move("END", { delay });
  return instance;
}

const reducedMotion = (
  <h1 className="black sz-big">
    Hi! I'm <span className={gradient}>{name}</span>.
    <br />I make{" "}
    <span
      dangerouslySetInnerHTML={{ __html: makeThings[makeThings.length - 1] }}
    />{" "}
    with code.{" "}
  </h1>
);
