import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import useIntersection from '../hooks/useIntersectionobserver'

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}

const LinkNext = ({ path, title }) => {
  const { observerEntry, refObserver } = useIntersection({ threshold: 0 })
  const intersected = observerEntry.isIntersecting

  if (!path || !title) {
    return (
      <a
        href="https://www.flowen.me"
        target="_blank"
        className={`link-next ${intersected ? 'show' : null}`}
        rel="noopener nofollower"
        ref={refObserver}
      >
        <div className="link-next__label">Made by</div>
        <div className="link-next__title" data-splitting="">
          Rou Hun Fan
        </div>
      </a>
    )
  } else {
    return (
      <Link to={path} className={`link-next ${intersected ? 'show' : null}`} ref={refObserver}>
        <div className="link-next__label">Read on</div>
        <div className="link-next__title" data-splitting="">
          {title}
        </div>
      </Link>
    )
  }
}

LinkNext.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
}

export default LinkNext
