import React from 'react'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Main from '../components/main'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Layout>
      <HeroBanner name="Aimee" />
      <h2>HOME PAGE....</h2>

      <Main headingTitle="I’m passionate about clean looking websites that work really well on all devices." />
    </Layout>
  </>
)

export default IndexPage
