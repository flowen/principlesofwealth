import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContentPage = () => (
  <Layout className="content-page">
    <SEO description="Content page" />

    <header class="header">
      <Link className="logo">
        Principles
        <br /> of Wealth
        <br /> .net
      </Link>

      <h1 className="title">Framework of specific knowledge</h1>

      <h2 className="subtitle">A summary of Naval Ravikant’s tweetstorms and podcast</h2>
    </header>

    <article></article>
  </Layout>
)

export default ContentPage
