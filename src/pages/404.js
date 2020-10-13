import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { css, jsx, keyframes } from "@emotion/core";
import {
  bgWhite,
  fullHeight,
  section,
  black,
  szBig,
  padBig,
  button,
  buttonBlack,
} from "../style";
/* @jsx jsx */
import { AutoFade } from "../components/animations";
import Toggle from "../components/Toggle";
import { useReduceMotion } from "../hooks";
import { FaRegSurprise } from "react-icons/fa";

const hover = keyframes`
  from {
    transform: translatey(0);
  }
  to {
    transform: translatey(-2rem) rotate(5deg);
  }
`;

const big4 = css`
  font-family: "Menlo";
  font-weight: bold;
  font-size: 30vmin;
`;
function Big4({ reduceMotion, delay }) {
  return (
    <span
      css={css([
        black,
        big4,
        !reduceMotion && {
          animation: `${hover} 1.5s ease-in-out ${delay} infinite alternate`,
        },
      ])}
    >
      4
    </span>
  );
}

export default function NotFound() {
  const reduceMotion = useReduceMotion();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>No page here yet!</title>
        <html lang={"en"} />
        <meta name="description" content="No page here yet!" />
      </Helmet>
      <Toggle />
      <section
        css={css([
          section,
          fullHeight,
          bgWhite,
          { paddingTop: "25vh", textAlign: "center" },
        ])}
      >
        <div
          css={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Big4 delay="0s" reduceMotion={reduceMotion} />
          <span>
            <FaRegSurprise
              size="25vmin"
              css={css([
                black,
                !reduceMotion && {
                  animation: `${hover} 1.5s ease-in-out 0.5s infinite alternate`,
                },
              ])}
            />
          </span>
          <Big4 delay="1s" reduceMotion={reduceMotion} />
        </div>
        <AutoFade dir="left">
          <h1 css={css([szBig, black, padBig])}>No page here yet.</h1>
        </AutoFade>
        <AutoFade>
          <Link to="/">
            <div css={css([button, buttonBlack])}>Go home</div>
          </Link>
        </AutoFade>
      </section>
    </>
  );
}
