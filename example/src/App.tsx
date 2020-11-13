import React from 'react'

import { Box } from '@chakra-ui/react'
import {
  Column,
  Center,
  Row,
  useSpacedLayout,
  RowOnDesktopColumnOnMobile,
  PercentOnDesktopPixelOnMobileSize,
  PercentageSize,
  PixelSize,
  useLockedViewHeight
} from 'buttered-chakra'
import 'buttered-chakra/dist/index.css'

const App = () => {
  const { windowHeight } = useLockedViewHeight({ min: 600 })

  const { parentHeight, spacing, childSizes } = useSpacedLayout({
    parentHeight: windowHeight.asNumber(),
    spacing: 20,
    childSizes: [
      new PercentageSize(0.5),
      new PixelSize(130),
      new PercentOnDesktopPixelOnMobileSize({
        percentageSize: 0.5,
        pixelSize: 100
      })
    ]
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
        height={parentHeight.asPxString()}
        bg='blue.500'
      >
        <Box
          bg='whatsapp.500'
          mb={spacing.asPxString()}
          h={childSizes[0].asPxString()}
          w='50px'
        />
        <Box
          bg='whatsapp.500'
          mb={spacing.asPxString()}
          h={childSizes[1].asPxString()}
          w='50px'
        />
        <Box bg='whatsapp.500' h={childSizes[2].asPxString()} w='50px' />
      </Column>

      <RowOnDesktopColumnOnMobile
        mainAxisAlignment='space-around'
        crossAxisAlignment='center'
        height={{ md: '200px', xs: '400px' }}
        width='90%'
        bg='orange.500'
      >
        <Box bg='whatsapp.500' h='50px' w='50px' />
        <Box bg='whatsapp.500' h='50px' w='50px' />
        <Box bg='whatsapp.500' h='50px' w='50px' />
      </RowOnDesktopColumnOnMobile>
    </Column>
  )
}

export default App
