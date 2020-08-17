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
 * and the desired percentage sizes of the children (relative to their parent minus the spacing desired)
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

  let childPixelSizes: string[] = []

  for (const size of childSizes) {
    if (size instanceof PercentageSize) {
      childPixelSizes.push(
        size.num * parentMinusSpacingAndFixedChildSizes + 'px'
      )
    } else {
      childPixelSizes.push(size.num + 'px')
    }
  }

  return {
    spacedParentHeight: parentHeight + 'px',
    spacing: spacing + 'px',
    childPixelSizes
  }
}
