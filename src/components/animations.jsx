import React, { useState, useEffect, useMemo } from "react";
import { useReduceMotion } from "../hooks/useMediaQuery";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */
import TypeItOriginal from "typeit-react";

export function TypeIt({
  element: Element = "div",
  reducedMotion,
  ...delegated
}) {
  const reduceMotion = useReduceMotion();
  if (reduceMotion) {
    return (
      <Element css={delegated.css} className={delegated.className}>
        {reducedMotion || delegated.children}
      </Element>
    );
  }
  return <TypeItOriginal element={Element} {...delegated} />;
}

export function Title({ children, className }) {
  return (
    <TypeIt
      element="h1"
      css={css`
        text-align: center;
        padding-bottom: var(--big-font-size);
      `}
      className={className}
      options={{
        waitUntilVisible: true,
        lifeLike: false,
        speed: 80,
        cursor: false,
      }}
    >
      {children}
    </TypeIt>
  );
}

const clsInvisible = css`
  @media not screen and (prefers-reduced-motion: reduce) {
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease-out;
    will-change: opacity, visibility;
  }
`;
const clsVisible = css`
  @media not screen and (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

export function AutoFade(props) {
  const isClient = typeof window !== "undefined";
  const [visible, setVisible] = useState(false);
  const observer = useMemo(
    () =>
      isClient &&
      new IntersectionObserver((entries) => {
        const v = entries.some((e) => e.isIntersecting);
        if (v) setVisible(true);
      }),
    [isClient]
  );

  const ref = React.useRef();
  useEffect(() => {
    const current = ref.current;
    if (current && !visible && observer) {
      observer.observe(ref.current);
      return () => observer.unobserve(current);
    }
  }, [observer, visible]);

  return (
    <Fade
      {...{
        ...props,
        visible,
        ref,
      }}
    />
  );
}

export const Fade = React.forwardRef(function Fade(
  { visible, dir, className, css: cssProp, children },
  ref
) {
  const reduceMotion = useReduceMotion();
  return (
    <div
      ref={ref}
      css={css([
        cssProp,
        !reduceMotion && dirs[dir],
        clsInvisible,
        visible && clsVisible,
      ])}
      className={className}
    >
      {children}
    </div>
  );
});

const dirs = {
  left: css`
    transform: translateX(-2rem);
  `,
  right: css`
    transform: translateX(2rem);
  `,
  top: css`
    transform: translateY(-2rem);
  `,
  bottom: css`
    transform: translateY(2rem);
  `,
};
