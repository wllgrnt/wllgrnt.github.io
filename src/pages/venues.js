import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {ImageOfChurchExterior, ImageOfChurchMap, ImageOfChurchInterior} from '../components/image'

const Venues = () => (
  <Layout>
    <SEO title="About the venues" />
    <h1>The venues for the day</h1>
    <h2>The church: St. Nicholas church / Kostel svatého Mikuláše </h2>
    <p>This Hussite church was built between 1732-1737, on the site of a 13th century Gothic church, and is located in the Old Town Square. <a href="https://www.svmikulas.cz/en/">See here for more details.</a>
</p>
    <p>NB: Not to be confused with the St. Nicholas church in Mala Strana!</p>
    <p>(Photos below belong to <a href="http://www.exclusiveweddingsinprague.com">Exclusive Weddings in Prague)</a></p>
    <p></p>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <ImageOfChurchMap/> 
      <ImageOfChurchInterior/> 
      <ImageOfChurchExterior/> 
    </div>

    <h2>The reception venue: Villa Richter</h2>
    <p>This restaurant sits alongside the Prague Castle, in the historic St. Wenceslas Vineyard. <a href="http://www.villarichter.cz/lang/en//">See here for more details.</a>
    </p>
    {/* <p>(Photos below also belong to <a href="http://www.exclusiveweddingsinprague.com">Exclusive Weddings in Prague)</a></p>
    <p></p>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <ImageOfChurchMap/> 
      <ImageOfChurchInterior/> 
      <ImageOfChurchExterior/> 
    </div> */}






    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Venues;
