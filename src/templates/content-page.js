import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const TemplateContent = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next } = pageContext

  const {
    frontmatter: { path, title },
  } = next || {
    frontmatter: { path: null, title: null },
  }

  return (
    <Layout className="content-page">
      <SEO description={frontmatter.intro} />

      <header className="header">
        <Link className="logo">
          Principles
          <br /> of Wealth
          <br /> .net
        </Link>

        <Nav />

        <h1 className="title">{frontmatter.title}</h1>

        <h2 className="subtitle">{frontmatter.subtitle}</h2>
      </header>

      <div className="article-wrapper">
        {frontmatter.intro ? <p className="intro">{frontmatter.intro}</p> : ''}

        <article className="article" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {path !== null || title !== null ? (
        <Link to={path} className="link-next">
          <div className="link-next__label">Read on</div>
          <div className="link-next__title"> {title} </div>
        </Link>
      ) : null}
    </Layout>
  )
}

export const TemplateContentQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
        subtitle
        intro
      }
    }
  }
`

export default TemplateContent
