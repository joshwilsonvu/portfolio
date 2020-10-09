import { injectGlobal, css } from "emotion";

const colors = {
  primary: ["#695d90", "#a296c5"],
  secondary: ["#3D7170", "#8bc2bf"],
  white: ["#f8f5f5", "#253340"],
  black: ["#272341", "#e2e4ec"],
};

let t = 0;
if (typeof window !== "undefined") {
  loadTheme();
}
export function getTheme() {
  return t;
}
export function toggleTheme() {
  t = Number(!t);
  setTheme();
  localStorage?.setItem("preferred-color-theme", t);
}
function setTheme() {
  for (const key of Object.keys(colors)) {
    document.documentElement.style.setProperty(
      `--${key}-color`,
      colors[key][t]
    );
  }
}
function loadTheme() {
  const storedTheme = localStorage.getItem("preferred-color-theme");
  if (storedTheme !== null) {
    t = Number(storedTheme);
    return;
  }
  const mql = matchMedia("(prefers-color-scheme: dark)");
  t = Number(mql.matches);
  setTheme();
}

function ifNoReduceMotion(str) {
  return `@media not screen and (prefers-reduced-motion: reduce) {${str}}`;
}

injectGlobal`
:root {
  // COLORS
  --primary-color: ${colors.primary[t]};
  --secondary-color: ${colors.secondary[t]};
  --white-color: ${colors.white[t]};
  --black-color: ${colors.black[t]};
  @media print {
    --white-color: white;
    --black-color: black;
  }
`;

export const white = css`
  color: var(--white-color);
  ${ifNoReduceMotion("transition: color 0.5s")};
`;
export const black = css`
  color: var(--black-color);
  ${ifNoReduceMotion("transition: color 0.5s")};
`;
export const bgWhite = css`
  background-color: var(--white-color);
  ${ifNoReduceMotion("transition: background-color 0.5s")};
`;
export const bgBlack = css`
  background-color: var(--black-color);
  ${ifNoReduceMotion("transition: background-color 0.5s")};
`;
export const borderWhite = css`
  border-color: var(--white-color);
`;
export const borderBlack = css`
  border-color: var(--black-color);
`;

export const gradient = css`
  background-image: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const bgGradient = css`
  background-color: var(--primary-color);
  background-image: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
`;
