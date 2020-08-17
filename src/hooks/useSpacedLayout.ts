import { PixelMeasurement } from '..'

export class PercentageSize {
  num: number

  constructor(num: number) {
    if (num > 1) {
      throw new Error('Cannot have a percentage higher than 1!')
    }

    this.num = num
  }
}

export class PixelSize {
  num: number

  constructor(num: number) {
    this.num = num
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
  childSizes: (PercentageSize | PixelSize)[]
}) {
  let parentMinusSpacingAndFixedChildSizes =
    parentHeight -
    spacing * (childSizes.length - 1) -
    childSizes
      .filter((child) => child instanceof PixelSize)
      .reduce((past, value) => past + value.num, 0)

  let spacedChildren: PixelMeasurement[] = []

  for (const size of childSizes) {
    if (size instanceof PercentageSize) {
      spacedChildren.push(
        new PixelMeasurement(size.num * parentMinusSpacingAndFixedChildSizes)
      )
    } else {
      spacedChildren.push(new PixelMeasurement(size.num))
    }
  }

  return {
    parentHeight: new PixelMeasurement(parentHeight),
    spacing: new PixelMeasurement(spacing),
    childSizes: spacedChildren
  }
}
