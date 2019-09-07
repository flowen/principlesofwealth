import { useState, useEffect, useRef } from 'react'

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('intersection-observer')
}

/**
 *
 * @param {object} options - intersectionObserver options
 */
export default function useIntersection(options = { threshold: 0 }) {
  const [observerEntry, setEntry] = useState({})
  const refObserver = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => setEntry(entries[0]), options)

    observer.observe(refObserver.current)

    return () => observer.disconnect()
  }, [refObserver])

  return { observerEntry, refObserver }
}
