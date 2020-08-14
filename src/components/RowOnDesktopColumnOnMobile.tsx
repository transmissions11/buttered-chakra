import React from 'react'
import { Flex } from '@chakra-ui/core'
import { RowProps } from './Row'

/** Creates a Flex with a row direction on desktop and a column direction on mobile.
 * and sets the `justifyContent` to the `mainAxisAlignment`
 * and the `alignItems` to the `crossAxisAlignment`.
 * If `expand === true` it will set the height and width of the Flex to 100%.
 * Passes all extra props to the Flex.
 */
export const RowOnDesktopColumnOnMobile = ({
  mainAxisAlignment,
  crossAxisAlignment,
  children,
  expand,
  ...others
}: RowProps) => {
  if (expand) {
    others.height = '100%'
    others.width = '100%'
  }

  return (
    <Flex
      flexDirection={{ md: 'row', xs: 'column' }}
      justifyContent={mainAxisAlignment}
      alignItems={crossAxisAlignment}
      {...others}
    >
      {children}
    </Flex>
  )
}
