import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'

export type CenterProps = {
  children: React.ReactNode
  expand?: boolean
} & FlexProps

/**  Creates a Flex where `justifyContent === 'center'` and `alignItems === 'center'`
 * If `expand === true` it will set the height and width of the Flex to 100%.
 * Passes all extra props to the Flex.
 */
export const Center = ({ children, expand, ...others }: CenterProps) => {
  if (expand) {
    others.height = '100%'
    others.width = '100%'
  }

  return (
    <Flex justifyContent='center' alignItems='center' {...others}>
      {children}
    </Flex>
  )
}
