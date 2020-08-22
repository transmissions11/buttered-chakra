import { useWindowSize } from './useWindowSize'

/** Returns whether the width of the window makes it likely a mobile device. */
export function useIsMobile() {
  const { width } = useWindowSize()

  return width < 768
}
