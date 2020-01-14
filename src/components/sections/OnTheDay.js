import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

const OnTheDay = () => (
  <StaticQuery
    query={graphql`
      query {
        art_church: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "church" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_villa: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "villa" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="ontheday">
        <Container>
          <h1>On the Day</h1>
          <Grid>
            <div>
              <h2>The Ceremony</h2>
              <p>Is at St Nicholas' Church.</p>
            </div>
            <Art>
              <Img fluid={data.art_church.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_villa.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>The Reception</h2>
              <p>Is at Villa Richter.</p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`


const ColouredSection = styled.section`
  background-color: ${props => props.theme.color.primary};
`

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`

export default OnTheDay
