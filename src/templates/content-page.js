import React, { useLayoutEffect, useEffect } from 'react'
import { graphql } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import LinkNext from '../components/link-next'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

const TemplateContent = ({ data, pageContext, transitionStatus, entry, exit }) => {
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
    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }
  }, [])

  return (
    <Layout className={`content-page ${frontmatter.path.split('/')[1]}`}>
      <SEO description={frontmatter.intro} />

      <header className="header">
        <TransitionLink
          exit={{
            length: 1.25,
            delay: 0,
          }}
          entry={{
            delay: 1.25,
          }}
          to="/"
          className="logo"
        >
          Principles
          <br /> of Wealth
          <br /> .net
        </TransitionLink>

        <Nav />

        <h1 className="title" data-splitting="">
          {frontmatter.title}
        </h1>

        {frontmatter.subtitle ? <h2 className="subtitle">{frontmatter.subtitle}</h2> : ''}
      </header>

      <div className="article-wrapper">
        {frontmatter.intro ? <p className="intro">{frontmatter.intro}</p> : ''}

        <article className="article" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

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
