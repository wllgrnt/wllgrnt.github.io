import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

const TheDayAfter = () => (
  <StaticQuery
    query={graphql`
      query {
        art_castle: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "castle" }
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
      <Section id="thedayafter">
        <Container>
          <h1>The Day After</h1>
          <h3 style={{ marginTop: '0.5em' }}>Sunday, the 24rd of May</h3>
          <p style={{ marginTop: '0.5em' }}>
            Informal and optional brunch. Dress code: Comfy
          </p>
          <Grid inverse>
            <div>
              <p>
                <b>Start time:</b> Eleven o' clock <br />
                <b>Location:</b> Hotel Hoffmeister, <br />
                Pod Bruskou 144,
                <br /> Prague
                <br />
                {/* (insert map pic if possible) */}
                <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_castle.childImageSharp.fluid} />
            </Art>
          </Grid>
          {/* <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Nothing new to learn here</h2>
              <p>
                Enjoy the power of the latest web technologies – React.js ,
                Webpack , modern JavaScript and CSS and more — all set up and
                waiting for you to start building.
              </p>
            </div>
          </Grid> */}
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

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`

export default TheDayAfter
