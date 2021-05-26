import { useWindowSize } from './useWindowSize'

/** Returns whether the width of the window makes it likely a mobile device. */
export function useIsMobile(): boolean {
  const { width } = useWindowSize()
  return width ? width < 768 : false
}
