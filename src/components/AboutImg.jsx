import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { hoverRotate } from "../style";
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
      className={cx(
        css`
          align-self: center;
        `,
        hoverRotate
      )}
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
