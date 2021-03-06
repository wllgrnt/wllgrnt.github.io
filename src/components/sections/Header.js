import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from '@components/global'
import ExternalLink from '@common/ExternalLink'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_castle: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "castle_trimmed" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_castle_with_text: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "castle_with_covid_text" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          {/* <Grid> */}
          <Art>
            <Img fluid={data.art_castle_with_text.childImageSharp.fluid} />
          </Art>
          {/* <Text>
              <h1 style={{ fontFamily: `"Lorca", serif`, fontWeight: "normal" }}>
                Will and Christina are getting married!
              </h1>
              <br />
              <p>(again)</p>
            </Text>
          </Grid> */}
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 80px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 10 auto;
  margin-left: -5px;
  // > div {
  //   width: 120%;
  //   margin-bottom: -4.5%;

  //   @media (max-width: ${props => props.theme.screen.md}) {
  //     width: 100%;
  //   }
  // }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: center;
  text-align: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 0;
    }
  }
`

const Text = styled.div`
  justify-self: center;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

export default Header
