import { useState, useEffect } from 'react'

/** Gets the height and width of the current window. */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

/** Returns the pixel count of the `percentage passed in * the height of the window`,
 * but will not return a value lower than the minimum passed.
 */
export function useMinLockedViewHeight(
  minHeight: number,
  viewHeightPercent: number
) {
  const { height } = useWindowSize()

  if (height <= minHeight) {
    return minHeight
  } else {
    return height * viewHeightPercent
  }
}
