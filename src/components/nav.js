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
          <svg
            className="svg-arrow"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31 0.50293C30.7348 0.50293 30.4804 0.644419 30.2929 0.896271C30.1054 1.14812 30 1.48971 30 1.84588V15.2754C30 15.6316 30.1054 15.9732 30.2929 16.225C30.4804 16.4769 30.7348 16.6183 31 16.6183C31.2652 16.6183 31.5196 16.4769 31.7071 16.225C31.8946 15.9732 32 15.6316 32 15.2754V1.84588C32 1.48971 31.8946 1.14812 31.7071 0.896271C31.5196 0.644419 31.2652 0.50293 31 0.50293V0.50293Z" />
            <path d="M23 7.21737H0V9.9033H23V13.9322L28 8.56033L23 3.18848V7.21737Z" />
          </svg>
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
          <svg
            className="svg-arrow"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31 0.50293C30.7348 0.50293 30.4804 0.644419 30.2929 0.896271C30.1054 1.14812 30 1.48971 30 1.84588V15.2754C30 15.6316 30.1054 15.9732 30.2929 16.225C30.4804 16.4769 30.7348 16.6183 31 16.6183C31.2652 16.6183 31.5196 16.4769 31.7071 16.225C31.8946 15.9732 32 15.6316 32 15.2754V1.84588C32 1.48971 31.8946 1.14812 31.7071 0.896271C31.5196 0.644419 31.2652 0.50293 31 0.50293V0.50293Z" />
            <path d="M23 7.21737H0V9.9033H23V13.9322L28 8.56033L23 3.18848V7.21737Z" />
          </svg>
          Chapters
        </TransitionLink>
      </li>
    </ul>
  </nav>
)

export default Nav
