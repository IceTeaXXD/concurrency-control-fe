import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex p="5" bg="purple.500" color="white">
        <Spacer />
        <Box>
          <Link to="/">
            <Text fontSize="md" fontWeight="bold" mr={10}>
              Home
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="/generate">
            <Text fontSize="md" fontWeight="bold" mr={10}>
              Generate
            </Text>
          </Link>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Box} cursor="pointer">
              <Text fontSize="md" fontWeight="bold" mr={10}>
                Reference
              </Text>
            </MenuButton>
            <MenuList color="purple.500">
              <MenuItem _hover={{ bg: 'purple.400', color: 'white' }}>
                <a href="#">Source Code</a>
              </MenuItem>
              <MenuItem _hover={{ bg: 'purple.400', color: 'white' }}>
                <a href="#">Document</a>
              </MenuItem>
            </MenuList>
          </Menu>
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
