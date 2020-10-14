import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { hoverGrow } from "../style";
import { css, jsx } from "@emotion/core";
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
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
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

  const imageFluid = image.node.childImageSharp.fluid;
  return (
    <div
      css={css([
        {
          width: "100%",
          minWidth: "min(65vw, 350px)",
          overflow: "hidden",
        },
        hoverGrow,
      ])}
    >
      <Img
        alt={alt}
        css={{
          alignSelf: "center",
          padding: "0",
          margin: "0",
        }}
        fluid={imageFluid}
      />
    </div>
  );
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
