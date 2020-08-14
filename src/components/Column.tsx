import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'
import { MainAxisAlignment, CrossAxisAlignment } from '..'

export type ColumnProps = {
  mainAxisAlignment: MainAxisAlignment
  crossAxisAlignment: CrossAxisAlignment
  children: React.ReactNode
  expand?: boolean
} & FlexProps

/** Creates a Flex with a column direction
 * and sets the `justifyContent` to the` mainAxisAlignment`
 * and the `alignItems` to the `crossAxisAlignment`.
 * If `expand === true` it will set the height and width of the Flex to 100%.
 * Passes all extra props to the Flex.
 */
export const Column = ({
  mainAxisAlignment,
  crossAxisAlignment,
  children,
  expand,
  ...others
}: ColumnProps) => {
  if (expand) {
    others.height = '100%'
    others.width = '100%'
  }

  return (
    <Flex
      flexDirection='column'
      justifyContent={mainAxisAlignment}
      alignItems={crossAxisAlignment}
      {...others}
    >
      {children}
    </Flex>
  )
}
