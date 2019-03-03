import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageOfChurch from '../components/imageofchurch'

const Venues = () => (
  <Layout>
    <SEO title="About the venues" />
    <h1>The venues for the day</h1>
    <h2>The church: St. Nicholas church / Kostel svatého Mikuláše </h2>
    <p>This Hussite church was built between 1732-1737, on the site of a 13th century Gothic church, and is located in the Old Town Square</p>
    <p>Not to be confused with the St. Nicholas church in Mala Strana!</p>
    <a href="https://www.svmikulas.cz/en/">The church official website</a>
    <p></p>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <ImageOfChurch/> 
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Venues;
