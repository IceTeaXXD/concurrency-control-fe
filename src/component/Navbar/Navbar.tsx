import { Box, Flex, Spacer, ChakraProvider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex p="5" bg="purple.500" color="white">
        <Spacer />
        <Box>
          <Link to="/">
            <Text fontSize="md" fontWeight="bold">
              Home
            </Text>
          </Link>
        </Box>
        <Box mx="8">
          <Link to="/generate">
            <Text fontSize="md" fontWeight="bold">
              Generate
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="/aboutus">
            <Text fontSize="md" fontWeight="bold" mr={2}>
              About Us
            </Text>
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default Navbar
