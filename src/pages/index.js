import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Will and Christina are getting married!</h1>
    <p>In Prague!</p>
    <p>On the 23rd of May 2020!</p>
    <p>On this website you'll find details of the venues for the ceremony and reception, as well as
      some advice on Prague for first-time visitors. Looking forward to seeing you all there! </p>

    <p>(Also, this is all still under construction, so will look a little rough) </p>
    <div style={{ maxHeight: `500px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  <div style={{position:`relative`, paddingBottom: `calc(176.47% + 44px)`}}>
    <iframe title="ferret" src='https://gfycat.com/ifr/FlawlessNegativeIcelandgull' frameborder='0' scrolling='no' width='100%' height='100%' style={{position:"absolute", top:0, left:0}} allowfullscreen>
    </iframe>
  </div>
  
  </Layout>
)

export default IndexPage

