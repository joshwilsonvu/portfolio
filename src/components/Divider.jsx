import React from "react";

import { bgGradient, bgWhite } from "../style";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */

const div = css`
  width: 100%;
  height: 10vw;
  background-size: cover;
`;
const clip1 = css`
  clip-path: polygon(0 101%, 100% 101%, 100% 0);
`;
const clip2 = css`
  clip-path: polygon(0 0, 100% 0, 0 100%);
`;
export default function Divider({ invert = false }) {
  return (
    <div aria-hidden="true" css={bgWhite}>
      <div css={css([bgGradient, div, invert ? clip1 : clip2])} />
    </div>
  );
}
