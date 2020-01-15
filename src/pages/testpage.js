import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import OnTheDay from '@sections/OnTheDay'
import TheDayAfter from '@sections/TheDayAfter'
import Transport from '@sections/Transport'
import About from '@sections/About'
import Registry from '@sections/Registry'
import RSVP from '@sections/RSVP'

import TestHeader from '@sections/TestHeader'
// import Brands from '@sections/Brands'
// import Team from '@sections/Team'
// import Faq from '@sections/Faq'
import Footer from '@sections/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <TestHeader />
    <OnTheDay />
    <TheDayAfter />
    <Transport />
    <About />
    <Registry />
    <RSVP />
    {/* 
    <Header />
    <Brands />
    <Team />
    <Faq /> */}
    <Footer />
  </Layout>
)

export default IndexPage
