import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const TemplateContent = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="content-page">
      <SEO description="Content page" />

      <header className="content-page__header">
        <Link className="logo">
          Principles
          <br /> of Wealth
          <br /> .net
        </Link>

        <Nav />

        <h1 className="title">{frontmatter.title}</h1>

        <h2 className="subtitle">{frontmatter.subtitle}</h2>
      </header>

      <div className="content-page__article-wrapper">
        {frontmatter.description ? <p className="intro">{frontmatter.description}</p> : ''}
        <article className="content-page__article" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const TemplateContentQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
      }
      id
    }
  }
`

export default TemplateContent
