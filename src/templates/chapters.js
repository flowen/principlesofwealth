import React, { useLayoutEffect, useEffect } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

import SEO from '../components/seo'
import Nav from '../components/nav'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

const ChaptersPage = ({ pageContext }) => {
  useLayoutEffect(() => {
    Splitting({ by: 'chars' })
  })

  useEffect(() => {
    if (typeof window === `undefined`) return null

    const title = document.querySelector('.title')
    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }
  }, [])

  const { chapters } = pageContext

  return (
    <>
      <SEO title="Chapters" description="The chapters" />

      <div className="chapters-page">
        <Nav />

        <h1 className="title" data-splitting="">
          Chapters
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
                    <TransitionLink
                      exit={{
                        length: 1.25,
                        delay: 0,
                      }}
                      entry={{
                        delay: 1.25,
                      }}
                      to={path}
                      className="chapters__anchor"
                    >
                      {title}
                    </TransitionLink>
                  </li>
                )
              })}
            </ol>
          </nav>
        ) : (
          <div>Got nuthin</div>
        )}
      </div>
    </>
  )
}

export default ChaptersPage
