import { css } from "@emotion/core";
import { FaSun, FaMoon, FaEye, FaLeaf, FaLemon } from "react-icons/fa";

const themes = [
  {
    title: "light",
    icon: FaSun,
    colors: {
      primary: "#695d90",
      secondary: "#3D6180",
      white: "#f8f5f7",
      black: "#272341",
    },
  },
  {
    title: "dark",
    icon: FaMoon,
    colors: {
      primary: "#a296c5",
      secondary: "#8bb2cf",
      white: "#253340",
      black: "#e2e4ec",
    },
  },
  {
    title: "high-contrast",
    icon: FaEye,
    colors: {
      primary: "#222",
      secondary: "#222",
      white: "white",
      black: "black",
    },
  },
  {
    title: "lemon",
    icon: FaLemon,
    colors: {
      primary: "#d8d0a0",
      secondary: "#c0c098",
      white: "#184850",
      black: "white",
    },
  },
  {
    title: "leaf",
    icon: FaLeaf,
    colors: {
      primary: "#b0a888",
      secondary: "#c0a090",
      white: "#223026",
      black: "#e4ece2",
    },
  },
];

let t = 0;
if (typeof window !== "undefined") {
  loadTheme();
}
export function getTheme() {
  return themes[t];
}
export function nextTheme() {
  t = (t + 1) % themes.length;
  setTheme();
  localStorage?.setItem("preferred-color-theme", t);
}
function setTheme() {
  for (const key of Object.keys(themes[t].colors)) {
    document.documentElement.style.setProperty(
      `--${key}-color`,
      themes[t].colors[key]
    );
  }
}
// Load the preferred theme from storage or guess the best theme based on media queries
function loadTheme() {
  const storedTheme = localStorage.getItem("preferred-color-theme");
  if (storedTheme !== null) {
    t = Number(storedTheme);
    if (!Number.isSafeInteger(t) || t > themes.length || t < 0) {
      t = 0;
    }
  } else {
    const mqlContrast = matchMedia("-ms-high-contrast: active");
    const mqlDark = matchMedia("(prefers-color-scheme: dark)");
    if (mqlContrast.matches) {
      t = themes.findIndex((theme) => theme.title.includes("contrast")) || 0;
    } else if (mqlDark.matches) {
      t = themes.findIndex((theme) => theme.title.includes("dark")) || 0;
    } else {
      t = 0;
    }
  }
  setTheme();
}

function ifNoReduceMotion(str) {
  return `@media not screen and (prefers-reduced-motion: reduce) {${str}}`;
}

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
