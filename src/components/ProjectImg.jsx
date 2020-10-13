import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { hoverGrow } from "../style";
import { jsx } from "@emotion/core";
/* @jsx jsx */

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  const image = data.images.edges.find((n) =>
    n.node.relativePath.includes(filename)
  );

  if (!image) return null;

  const imageFixed = image.node.childImageSharp.fixed;
  return <Img alt={alt} css={hoverGrow} fixed={imageFixed} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
