export type MainAxisAlignmentStrings =
  | 'space-between'
  | 'space-around'
  | 'flex-start'
  | 'center'
  | 'flex-end'

export type MainAxisAlignment =
  | MainAxisAlignmentStrings
  | { md: MainAxisAlignmentStrings; xs: MainAxisAlignmentStrings }

export type CrossAxisAlignmentStrings = 'flex-start' | 'center' | 'flex-end'

export type CrossAxisAlignment =
  | CrossAxisAlignmentStrings
  | {
      md: CrossAxisAlignmentStrings
      xs: CrossAxisAlignmentStrings
    }

export { Center } from './components/Center'
export { Row } from './components/Row'
export { Column } from './components/Column'
export { RowOnDesktopColumnOnMobile } from './components/RowOnDesktopColumnOnMobile'

export {
  PercentageSize,
  PixelSize,
  useSpacedLayout
} from './hooks/useSpacedLayout'
export { useWindowSize, useMinLockedViewHeight } from './hooks/useWindowSize'
