import { useState, useEffect } from 'react'
import { PixelMeasurement } from '..'

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

/** Returns the pixel count of the height of the window,
 * but will not return a value lower or higher than the minimum/maximum passed.
 */
export function useLockedViewHeight({
  min = -1,
  max = Number.MAX_SAFE_INTEGER
}: {
  min?: number
  max?: number
}) {
  const { height } = useWindowSize()

  if (height <= min) {
    return {
      windowHeight: new PixelMeasurement(min),
      isLocked: true
    }
  } else if (height >= max) {
    return {
      windowHeight: new PixelMeasurement(max),
      isLocked: true
    }
  } else {
    return {
      windowHeight: new PixelMeasurement(height),
      isLocked: false
    }
  }
}
