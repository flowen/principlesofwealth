import React, { useLayoutEffect, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import LinkNext from '../components/link-next'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

const TemplateContent = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next } = pageContext

  const {
    frontmatter: { path, title },
  } = next || {
    frontmatter: { path: null, title: null },
  }

  useLayoutEffect(() => {
    Splitting({ by: 'chars' })
  })

  useEffect(() => {
    const title = document.querySelector('.title')
    title.classList.add('show')

    return () => {
      title.classList.remove('show')
    }
  }, [])

  return (
    <Layout className="content-page">
      <SEO description={frontmatter.intro} />

      <header className="header">
        <Link className="logo" to="/">
          Principles
          <br /> of Wealth
          <br /> .net
        </Link>

        <Nav />

        <h1 className="title" data-splitting="">
          {frontmatter.title}
        </h1>

        <h2 className="subtitle">{frontmatter.subtitle}</h2>
      </header>

      <div className="article-wrapper">
        {frontmatter.intro ? <p className="intro">{frontmatter.intro}</p> : ''}

        <article className="article" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* {path !== null || title !== null ? <LinkNext path title /> : null} */}
      <LinkNext path={path} title={title} />
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
