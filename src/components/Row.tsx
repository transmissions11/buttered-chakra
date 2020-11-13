import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import { MainAxisAlignment, CrossAxisAlignment } from '..'

export type RowProps = {
  mainAxisAlignment: MainAxisAlignment
  crossAxisAlignment: CrossAxisAlignment
  children: React.ReactNode
  expand?: boolean
} & FlexProps

/** Creates a Flex with a row direction
 * and sets the `justifyContent` to the `mainAxisAlignment`
 * and the `alignItems` to the `crossAxisAlignment`.
 * If `expand === true` it will set the height and width of the Flex to 100%.
 * Passes all extra props to the Flex.
 */
export const Row = ({
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
      flexDirection='row'
      justifyContent={mainAxisAlignment}
      alignItems={crossAxisAlignment}
      {...others}
    >
      {children}
    </Flex>
  )
}
