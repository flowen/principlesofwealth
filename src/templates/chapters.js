import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ChaptersPage = ({ pageContext }) => {
  const { chapters } = pageContext

  return (
    <Layout className="chapters-page">
      <SEO description="Chapters" />

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__anchor">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/chapters" className="nav__anchor">
              Chapters
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="title">
        Principles
        <br /> of Wealth
        <br /> .net
      </h1>

      <h2 className="subtitle">A summary of Naval Ravikant’s tweetstorms and podcast</h2>

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
    </Layout>
  )
}
export default ChaptersPage
