import React from 'react'

import { Box } from '@chakra-ui/core'
import {
  Column,
  Center,
  Row,
  useSpacedLayout,
  useWindowSize
} from 'buttered-chakra'
import 'buttered-chakra/dist/index.css'

const App = () => {
  const { height } = useWindowSize()

  const { spacedParentHeight, spacing, childSizes } = useSpacedLayout({
    parentHeight: height * 0.5,
    spacing: 5,
    childSizePercentages: [0.3, 0.2, 0.5]
  })

  return (
    <Column
      bg='red.500'
      height='2000px'
      mainAxisAlignment='space-around'
      crossAxisAlignment='center'
    >
      <Row
        mainAxisAlignment='space-around'
        crossAxisAlignment='center'
        bg='black'
        p='25px'
        w='90%'
      >
        <Box bg='whatsapp.500' h='50px' w='50px' />
        <Box bg='whatsapp.500' h='50px' w='50px' />
        <Box bg='whatsapp.500' h='50px' w='50px' />
      </Row>
      <Box bg='white' h='100px' w='100px'>
        <Center expand>
          <Box bg='blue.500' h='30px' w='30px' />
        </Center>
      </Box>
      <Box bg='black' h='300px' w='100px'>
        <Column
          expand
          mainAxisAlignment='space-around'
          crossAxisAlignment='center'
        >
          <Box bg='whatsapp.500' h='50px' w='50px' />
          <Box bg='whatsapp.500' h='50px' w='50px' />
          <Box bg='whatsapp.500' h='50px' w='50px' />
        </Column>
      </Box>
      <Column
        mainAxisAlignment='flex-start'
        crossAxisAlignment='center'
        height={spacedParentHeight}
        bg='blue.500'
      >
        <Box bg='whatsapp.500' mb={spacing} h={childSizes[0]} w='50px' />
        <Box bg='whatsapp.500' mb={spacing} h={childSizes[1]} w='50px' />
        <Box bg='whatsapp.500' h={childSizes[2]} w='50px' />
      </Column>
    </Column>
  )
}

export default App