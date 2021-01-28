import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <SEO title="404: Not found" />
      <h1>404 NOT FOUND</h1>
      <p>
        We can't seem to find what you are looking for. The page you are looking
        for does not exist.
      </p>
      <p>
        Please go back <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
