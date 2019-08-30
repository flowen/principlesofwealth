import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout class="index-page">
    <SEO
      title="Principles of Wealth .net"
      description="A summary of Naval Ravikant’s tweetstorms and podcast"
    />

    <nav className="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a class="nav__anchor" href="">
            01. About
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__anchor" href="">
            02. Chapters
          </a>
        </li>
      </ul>
    </nav>

    <h1 class="title">
      Principles
      <br /> of Wealth
      <br /> .net
    </h1>

    <h2 class="subtitle">A summary of Naval Ravikant’s tweetstorms and podcast</h2>

    <div className="intro">
      <p>
        This site is a summary of Naval's famous podcast 'how to get rich'. Which started out as
        several tweetstorms, the podcast dove deep into each tweet.{' '}
      </p>

      <p>
        But Podcasts are slow to consume. Reading is faster than listening and a summary is even
        faster.
      </p>

      <p>
        I wrote this out of my own interest and wanted to showcase my skills as a designer and
        front-end developer.
      </p>

      <p>If you’re interested in working with me.</p>

      <p>Enjoy reading</p>
    </div>
  </Layout>
)

export default IndexPage
