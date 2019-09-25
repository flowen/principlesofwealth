import '../assets/scss/index.scss'
import 'splitting/dist/splitting.css'

import React, { useState, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'
import { setConfig } from 'react-hot-loader'

import Footer from '../components/footer'

import twitterCard from '../assets/cards/twitter-card.png'
import ogCard from '../assets/cards/og-card.png'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
setConfig({ pureSFC: true })

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
          keywords
          twitter_handle
        }
      }
    }
  `)

  const { siteUrl, title, description, keywords, twitter_handle } = site.siteMetadata

  const [themeDark, setThemeDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    Splitting({ by: 'chars' })
  })

  if (typeof window === `undefined`) return null

  if (themeDark) {
    document.documentElement.classList.remove('theme-light')
    document.documentElement.classList.add('theme-dark')
  } else {
    document.documentElement.classList.remove('theme-dark')
    document.documentElement.classList.add('theme-light')
  }

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { charSet: 'utf-8' },
          { httpEquiv: 'Content-Language', content: 'en-us' },
          { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
          { httpEquiv: 'cleartype', content: 'on' },
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1',
          },
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'google', value: 'notranslate' },
          { name: 'HandheldFriendly', content: 'true' },
          { name: 'apple-mobile-web-app-title', content: title },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'white',
          },
          { name: 'msapplication-TileColor', content: '#da532c' },
          { name: 'theme-color', content: '#ffffff' },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: twitter_handle },
          { name: 'twitter:creator', content: twitter_handle },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image:src', content: siteUrl + twitterCard },
          { name: 'twitter:url', content: siteUrl },

          { property: 'og:title', content: title },
          { property: 'og:url', content: siteUrl },
          { property: 'og:description', content: description },
          { property: 'og:image', content: siteUrl + ogCard },
          { property: 'og:image:width', content: 1200 },
          { property: 'og:image:height', content: 628 },
          { property: 'og:image:secure_url', content: siteUrl + ogCard },
          { property: 'og:image:alt', content: title },
          { property: 'og:site_name', content: title },
          { property: 'og:type', content: 'website' },
        ]}
      />

      <main className={`layout`}>{children}</main>

      <Footer
        themeDark={themeDark}
        setThemeDark={setThemeDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
