import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from '@components/global'
import ExternalLink from '@common/ExternalLink'

const TestHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_candw_skiing: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "candw_skiing_circle" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_candw_ham: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "candw_ham_rounded" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_candw: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "WaC_edited_text" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Art>
          <Img fluid={data.art_candw.childImageSharp.fluid} />
        </Art>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_candw_skiing.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>Will and Christina are getting married!</h1>
              <br />
              <p>(again)</p>
            </Text>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_candw_ham.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>Will and Christina are getting married!</h1>
              <br />
              <p>(again)</p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 0;

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
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

export default TestHeader
