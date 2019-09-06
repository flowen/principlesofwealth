import { useEffect, useState } from 'react'

/**
 *
 * @param {ref} `ref of the parent object`
 * @returns {coords} `x,y offset from parent object`
 */
const useMouseCoords = (ref) => {
  let [coords, setCoords] = useState({ x: 0, y: 0 })
  let offsetParent

  useEffect(() => {
    offsetParent = ref.current.getBoundingClientRect()

    if (typeof window === `undefined`) return // escape gatsby build process

    window.addEventListener('mousemove', handleCoords)
    return () => window.removeEventListener('mousemove', handleCoords)
  }, [])

  function handleCoords(e) {
    setCoords({
      x: e.clientX - offsetParent.x,
      y: e.clientY - offsetParent.y,
    })
  }

  return coords
}

export default useMouseCoords
