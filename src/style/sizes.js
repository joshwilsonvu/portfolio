import { css, injectGlobal } from "emotion";

injectGlobal`
// FONT SIZE
:root {
  --default-font-size: 1rem;
  --mid-font-size: 1.25rem;
  --big-font-size: 1.5rem;

  @media screen and (min-width: 576px) {
    --mid-font-size: 1.67rem;
    --big-font-size: 2.25rem;
  }
  @media screen and (min-width: 992px) {
    --default-font-size: 1.25rem;
    --mid-font-size: 2rem;
    --big-font-size: 2.75rem;
  }
}
`;

export const szNormal = css`
  font-size: var(--default-font-size);
`;
export const szMid = css`
  font-size: var(--mid-font-size);
`;
export const szBig = css`
  font-size: var(--big-font-size);
`;

export const padSmall = css`
  padding: calc(var(--default-font-size) / 2) var(--default-font-size);
`;
export const padBig = css`
  padding: var(--big-font-size);
`;
