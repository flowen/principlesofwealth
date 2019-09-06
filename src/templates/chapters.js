import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const ChaptersPage = ({ pageContext }) => {
  const { chapters } = pageContext

  return (
    <Layout className="chapters-page">
      <SEO title="Chapters" description="The chapters" />

      <Nav />

      <h1 className="title">
        Principles
        <br /> of Wealth
        <br /> .net
      </h1>

      <h2 className="subtitle">A summary of Naval Ravikant’s tweetstorms and podcast</h2>

      {chapters.length > 1 ? (
        <nav className="chapters">
          <ol className="chapters__list">
            {chapters.map(({ node }) => {
              const { id, frontmatter } = node
              const { title, path } = frontmatter

              return (
                <li className="chapters__item" key={id}>
                  <Link to={path} className="chapters__anchor">
                    {title}
                  </Link>
                </li>
              )
            })}
          </ol>
        </nav>
      ) : (
        <div>Got nuthin</div>
      )}
    </Layout>
  )
}

export default ChaptersPage
