export type MainAxisAlignmentStrings =
  | 'space-between'
  | 'space-around'
  | 'flex-start'
  | 'center'
  | 'flex-end'

export type MainAxisAlignment =
  | MainAxisAlignmentStrings
  | { md: MainAxisAlignmentStrings; base: MainAxisAlignmentStrings }

export type CrossAxisAlignmentStrings =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'

export type CrossAxisAlignment =
  | CrossAxisAlignmentStrings
  | {
      md: CrossAxisAlignmentStrings
      base: CrossAxisAlignmentStrings
    }

export class PixelMeasurement {
  size: number

  constructor(num: number) {
    this.size = num
  }

  asPxString(): string {
    return this.size + 'px'
  }

  toString(): string {
    return this.asPxString()
  }

  asNumber(): number {
    return this.size
  }
}

export { Center } from './components/Center'
export { Row } from './components/Row'
export { Column } from './components/Column'
export { RowOnDesktopColumnOnMobile } from './components/RowOnDesktopColumnOnMobile'
export { RowOrColumn } from './components/RowOrColumn'

export {
  PercentageSize,
  PercentOnDesktopPixelOnMobileSize,
  ResponsivePixelSize,
  PixelSize,
  useSpacedLayout
} from './hooks/useSpacedLayout'
export { useIsMobile } from './hooks/useIsMobile'
export { useWindowSize, useLockedViewHeight } from './hooks/useWindowSize'
