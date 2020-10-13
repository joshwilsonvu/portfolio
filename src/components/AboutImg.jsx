import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";
/* @jsx jsx */
import { hoverGrow } from "../style";
import Img from "gatsby-image";

const AboutImg = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const imageFixed = data.image.childImageSharp.fixed;

  if (!imageFixed) return null;

  return (
    <Img
      css={css([
        css`
          align-self: center;
          filter: drop-shadow(0 0 1rem var(--white-color));
        `,
        hoverGrow,
      ])}
      alt={alt}
      fixed={imageFixed}
    />
  );
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
