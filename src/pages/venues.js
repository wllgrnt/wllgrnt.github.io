import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Venues = () => (
  <Layout>
    <SEO title="About the venues" />
    <h1>The venues for the day</h1>
    <p>There will be some data here!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Venues
