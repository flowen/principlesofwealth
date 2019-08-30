import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout class="chapters">
    <SEO title="Principles of Wealth .net" description="Chapters" />

    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <Link to="/" class="nav__anchor">
            About
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/chapters" class="nav__anchor">
            Chapters
          </Link>
        </li>
      </ul>
    </nav>

    <h1 class="title">
      Principles
      <br /> of Wealth
      <br /> .net
    </h1>

    <h2 class="subtitle">A summary of Naval Ravikant’s tweetstorms and podcast</h2>

    <nav class="chapters">
      <ol class="chapters__list">
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter asdf ahsdlfk jhasdf
          </Link>
        </li>

        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter asdf asf klasdjf lajfkjfakjsdf aljkfh
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
        <li class="chapters__item">
          <Link to="" class="chapters__anchor">
            Chapter
          </Link>
        </li>
      </ol>
    </nav>
  </Layout>
)

export default IndexPage
