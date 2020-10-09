import { css, injectGlobal } from "emotion";
import "./reset";
import "./typography";
export * from "./colors";
export * from "./sizes";

export const flex0 = css`
  flex: 0;
`;

export const flex1 = css`
  flex: 1;
`;

export const textLeft = css`
  text-align: left;
`;
export const hero = css`
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const fullHeight = css`
  min-height: 100vh;
`;

export const fullWidth = css`
  width: 100%;
`;

export const section = css`
  width: 100%;
  padding: var(--big-font-size);
`;

export const angleTop = css`
  margin-top: -10vw;
  padding-top: calc(10vw + var(--big-font-size));
  z-index: -11;
`;

export const angleBottom = css`
  clip-path: polygon(0 0, 0 100%, 100% calc(100% - 10vw), 100% 0);
  padding-bottom: calc(10vw + var(--big-font-size));
  z-index: -9;
`;

export const angleBoth = css`
  margin-top: -10vw;
  padding-top: calc(10vw + var(--big-font-size));
  clip-path: polygon(0 0, 0 100%, 100% calc(100% - 10vw), 100% 0);
  padding-bottom: calc(10vw + var(--big-font-size));
  z-index: -10;
`;

export const sectionTitle = css`
  margin: 0px;
  margin-bottom: 4.5rem;
  font-size: var(--big-font-size);
  font-weight: bold;
  text-transform: uppercase;
`;

export const listUnstyled = css`
  padding-left: 0;
  list-style: none;
`;

const flexShared = `
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  & > * {
    flex-wrap: inherit;
  }
`;
export const mainCenter = css`
  align-items: center;
`;
export const crossCenter = css`
  align-content: center;
  justify-content: center;
`;
export const noShrink = css`
  flex-shrink: 0;
`;

export const column = css`
  ${flexShared}
  flex-direction: column;
  height: 100%;
  ${"" /* ${process.env.NODE_ENV === "development" && `border: 1px solid hotpink;`} */}
`;
export const row = css`
  ${flexShared}
  flex-direction: row;
  width: 100%;
  ${"" /* ${process.env.NODE_ENV === "development" && "border: 1px solid purple;"} */}
`;
export const readingWidth = css`
  min-width: 30ch;
  max-width: 60ch;
  overflow: wrap;
`;

export const alignCenter = css`
  align-items: center;
  justify-content: center;
`;
export const bottom = css`
  bottom: 0;
`;

export const button = css`
  display: inline-block;
  padding: 0.8rem var(--default-font-size);
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  line-height: 1;
  z-index: 1;
  flex: 0;
  transition: all 0.5s;

  ${"" /* &:hover {
    text-decoration: none;
  } */}
`;
export const buttonWhite = css`
  color: var(--white-color);
  border-color: var(--white-color);
  background-color: transparent;
  &:hover {
    color: var(--black-color);
    background-color: var(--white-color);
  }
`;
export const buttonBlack = css`
  color: var(--black-color);
  border-color: var(--black-color);
  background-color: transparent;
  &:hover {
    color: var(--white-color);
    background-color: var(--black-color);
  }
`;

export const hoverRotate = css`
  will-change: transform;
  transition: transform 0.5s;
  &:hover {
    @media not screen and (prefers-reduced-motion: reduce) {
      transform: rotate(-5deg) scale(1.05);
    }
  }
`;
