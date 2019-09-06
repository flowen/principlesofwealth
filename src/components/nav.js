import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/" className="nav__anchor">
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/chapters/" className="nav__anchor">
          Chapters
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
