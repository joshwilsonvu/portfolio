import React, { useState } from "react";
import { nextTheme, getTheme, black, szTap } from "../style";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */

const topRight = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export default function Toggle() {
  const rerender = useRerender();
  const toggle = () => {
    nextTheme();
    rerender();
  };

  const currentTheme = getTheme();
  const Icon = currentTheme.icon;
  return (
    <Icon
      aria-hidden="true"
      title={`${currentTheme.title} theme`}
      css={css([black, topRight, szTap])}
      onClick={toggle}
    />
  );
}

function useRerender() {
  const [, set] = useState({});
  return () => set({});
}
