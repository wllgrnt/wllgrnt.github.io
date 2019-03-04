import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */



function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
      query multipleImageQuery {
        churchInterior: file(relativePath: { eq: "stnicks_interior.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        churchExterior: file(relativePath: { eq: "stnicks_exterior.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        churchMap: file(relativePath: { eq: "stnicks_map.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeHolder: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  );
};

const ImageOfChurchMap = withImageData(props => (
  <Img fluid={props.imageData.churchMap.childImageSharp.fluid} />
));
const ImageOfChurchInterior = withImageData(props => (
  <Img fluid={props.imageData.churchInterior.childImageSharp.fluid} />
));
const ImageOfChurchExterior = withImageData(props => (
  <Img fluid={props.imageData.churchExterior.childImageSharp.fluid} />
));
const PlaceHolderImage = withImageData(props => (
  <Img fluid={props.imageData.placeHolder.childImageSharp.fluid} />
));


export {ImageOfChurchMap, ImageOfChurchInterior, ImageOfChurchExterior, PlaceHolderImage   };
