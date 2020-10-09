import React from "react";

import { bgGradient, bgWhite } from "../style";
import { cx, css } from "emotion";

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
    <div aria-hidden="true" className={bgWhite}>
      <div className={cx(bgGradient, div, invert ? clip1 : clip2)} />
    </div>
  );
}
