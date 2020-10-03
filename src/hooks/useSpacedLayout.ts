import { useIsMobile } from './useIsMobile'
import { PixelMeasurement } from '..'

export class PercentageSize {
  percent: number

  constructor(num: number) {
    if (num > 1) {
      throw new Error('Cannot have a percentage higher than 1!')
    }

    this.percent = num
  }
}

export class PercentOnDesktopPixelOnMobileSize {
  percent: number
  pixel: number

  constructor({
    percentageSize,
    pixelSize
  }: {
    percentageSize: number
    pixelSize: number
  }) {
    if (percentageSize > 1) {
      throw new Error('Cannot have a percentage higher than 1!')
    }

    this.percent = percentageSize
    this.pixel = pixelSize
  }
}

export class PixelSize {
  pixel: number

  constructor(num: number) {
    this.pixel = num
  }
}

export class ResponsivePixelSize {
  desktop: number
  mobile: number

  constructor({ desktop, mobile }: { desktop: number; mobile: number }) {
    this.mobile = mobile
    this.desktop = desktop
  }
}

/** Takes the height of the parent, the desired spacing between children,
 * and the desired percentage sizes of the children (relative to their parent minus the spacing desired and the size of fixed sized children)
 * or the size of the child in pixels
 * and returns the pixel size of each child
 * that makes that child conform to the desired percentage.
 */
export function useSpacedLayout({
  parentHeight,
  spacing,
  childSizes
}: {
  parentHeight: number
  spacing: number
  childSizes: (
    | PercentageSize
    | PercentOnDesktopPixelOnMobileSize
    | PixelSize
    | ResponsivePixelSize
  )[]
}) {
  const isMobile = useIsMobile()

  let parentMinusSpacingAndFixedChildSizes =
    parentHeight -
    spacing * (childSizes.length - 1) -
    childSizes.reduce((past, value) => {
      if (
        value instanceof PixelSize ||
        (value instanceof PercentOnDesktopPixelOnMobileSize && isMobile)
      ) {
        return past + value.pixel
      } else if (value instanceof ResponsivePixelSize) {
        return past + (isMobile ? value.mobile : value.desktop)
      } else {
        return past
      }
    }, 0)

  let spacedChildren: PixelMeasurement[] = []

  for (const size of childSizes) {
    if (
      size instanceof PercentageSize ||
      (size instanceof PercentOnDesktopPixelOnMobileSize && !isMobile)
    ) {
      spacedChildren.push(
        new PixelMeasurement(
          size.percent * parentMinusSpacingAndFixedChildSizes
        )
      )
    } else if (size instanceof PercentOnDesktopPixelOnMobileSize && isMobile) {
      spacedChildren.push(new PixelMeasurement(size.pixel))
    } else if (size instanceof ResponsivePixelSize) {
      spacedChildren.push(
        new PixelMeasurement(isMobile ? size.mobile : size.desktop)
      )
    } else {
      spacedChildren.push(new PixelMeasurement(size.pixel))
    }
  }

  return {
    parentHeight: new PixelMeasurement(parentHeight),
    spacing: new PixelMeasurement(spacing),
    childSizes: spacedChildren
  }
}
