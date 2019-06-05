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
      <Main />
    </Layout>
  </>
)

export default IndexPage
