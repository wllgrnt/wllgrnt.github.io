import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

const GettingHere = () => (
  <StaticQuery
    query={graphql`
      query {
        art_tram: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tram" }
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
      <Section id="transport">
        <Container>
          <h1>Transport</h1>
          <Grid>
            <Art>
              <Img fluid={data.art_tram.childImageSharp.fluid} />
            </Art>
            <div>
              {/* <h2>Transport Info</h2> */}
              <h3>Getting from the airport</h3>
              <p>
                An Uber from the airport will cost £15. Alternatively, take
                public transport!
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <h3> In and around Prague</h3>
              <p>
                Prague probably has the world's best public transport system.
                The tram system will take contactless payments, and costs 24Kc
                for a 20-minute trip. Google maps or equivalent will give routes
                and directions.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_tram.childImageSharp.fluid} />
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

export default GettingHere
