import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container, SectionHeader } from '@components/global'
// import Form from '@common/Form'
import ExternalLink from '@common/ExternalLink'

const RSVP = () => (
  <StaticQuery
    query={graphql`
      query {
        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
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
      <Section id="rsvp">
        <Container>
          <SectionHeader accent>
            <h1>RSVP</h1>
          </SectionHeader>
          <Grid>
            <div>
              <p>
                To let us know you're coming, and choose your dinner options,
                please use the form below:
              </p>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <StyledExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfIzqQRGCqsW2pdUSMcEx2uWtCTIHQxavdRxrlIWs2nBj3ikg/viewform">
                  RSVP
                </StyledExternalLink>
              </div>
              <p>Thanks!</p>
            </div>
            {/* <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art> */}
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
  grid-template-columns: 1fr;
  grid-gap: 40px;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: center;
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
const StyledExternalLink = styled(ExternalLink)`
  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
  max-width: 150px;
  margin: 50px 0;
  padding: 12px 20px;
  border-style: none;
  border-radius: 5px;
  background-color: #08c;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  text-decoration: none;
`

export default RSVP
