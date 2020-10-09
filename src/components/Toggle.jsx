import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme, getTheme, black, szMid } from "../style";
import { css, cx } from "emotion";

const topRight = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export default function Toggle() {
  const rerender = useRerender();
  const toggle = () => {
    toggleTheme();
    rerender();
  };

  const currentTheme = getTheme();
  const Icon = currentTheme ? FaSun : FaMoon;
  return (
    <Icon
      aria-hidden="true"
      className={cx(black, topRight, szMid)}
      onClick={toggle}
    />
  );
}

function useRerender() {
  const [, set] = useState({});
  return () => set({});
}
