/** Takes the height of the parent, the desired spacing between children,
 * and the desired percentage sizes of the children (relative to their parent minus the spacing desired)
 * and returns the pixel size of each child
 * that makes that child conform to the desired percentage.
 */
export function useSpacedLayout({
  parentHeight,
  spacing,
  childSizePercentages
}: {
  parentHeight: number
  spacing: number
  childSizePercentages: number[]
}) {
  let parentMinusSpacing =
    parentHeight - spacing * (childSizePercentages.length - 1)

  let childSizes = []

  for (const percentage of childSizePercentages) {
    childSizes.push(percentage * parentMinusSpacing + 'px')
  }

  return {
    spacedParentHeight: parentHeight + 'px',
    spacing: spacing + 'px',
    childSizes
  }
}
