import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <TransitionLink
          exit={{
            length: 1.25,
            delay: 0,
          }}
          entry={{
            delay: 1.25,
          }}
          to="/"
          className="nav__anchor"
        >
          About
        </TransitionLink>
      </li>
      <li className="nav__item">
        <TransitionLink
          exit={{
            length: 1.25,
            delay: 0,
          }}
          entry={{
            delay: 1.25,
          }}
          to="/chapters"
          className="nav__anchor"
        >
          Chapters
        </TransitionLink>
      </li>
    </ul>
  </nav>
)

export default Nav
