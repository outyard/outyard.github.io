import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Image = ({src, alt}) => {
  /*
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: ${src} }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={alt} />;
  */
  return <img src={src} alt={alt} />
}

export default Image;
