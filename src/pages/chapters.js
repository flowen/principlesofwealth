import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout className="chapters">
    <SEO title="Principles of Wealth .net" description="Chapters" />

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
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter asdf ahsdlfk jhasdf
          </Link>
        </li>

        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter asdf asf klasdjf lajfkjfakjsdf aljkfh
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li className="chapters__item">
          <Link to="" className="chapters__anchor">
            Chapter
          </Link>
        </li>
      </ol>
    </nav>
  </Layout>
)

export default IndexPage
