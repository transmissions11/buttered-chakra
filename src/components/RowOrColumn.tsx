import React from 'react'
import { Flex } from '@chakra-ui/react'
import { RowProps } from './Row'

/** Creates a Flex which will be a row if `isRow` is true
 * and sets the `justifyContent` to the `mainAxisAlignment`
 * and the `alignItems` to the `crossAxisAlignment`.
 * If `expand === true` it will set the height and width of the Flex to 100%.
 * Passes all extra props to the Flex.
 */
export const RowOrColumn = ({
  mainAxisAlignment,
  crossAxisAlignment,
  children,
  expand,
  isRow,
  ...others
}: RowProps & { isRow: boolean }) => {
  if (expand) {
    others.height = '100%'
    others.width = '100%'
  }

  return (
    <Flex
      flexDirection={isRow ? 'row' : 'column'}
      justifyContent={mainAxisAlignment}
      alignItems={crossAxisAlignment}
      {...others}
    >
      {children}
    </Flex>
  )
}
