import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import OnTheDay from '@sections/OnTheDay'
import TheDayAfter from '@sections/TheDayAfter'
import Transport from '@sections/Transport'
import About from '@sections/About'
import Registry from '@sections/Registry'
import RSVP from '@sections/RSVP'

import Header from '@sections/Header'
// import Brands from '@sections/Brands'
// import Team from '@sections/Team'
// import Faq from '@sections/Faq'
import Footer from '@sections/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
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
