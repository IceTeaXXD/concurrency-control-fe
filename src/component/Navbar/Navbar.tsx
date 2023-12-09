import { useState } from 'react';
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
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ChakraProvider>
      <Flex p="5" bg="purple.500" color="white" justifyContent="flex-end">
        <Spacer />

        {/* Hamburger Icon for Mobile */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={handleDrawerOpen}
            aria-label="Open navigation drawer"
          />
        </Box>

        {/* Regular navigation links for larger screens */}
        <Box display={{ base: 'none', md: 'block' }} mr={10}>
          <Link to="/">
            <Text fontSize="md" fontWeight="bold">
              Home
            </Text>
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'block' }} mr={10}>
          <Link to="/generate">
            <Text fontSize="md" fontWeight="bold">
              Generate
            </Text>
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'block' }} mr={10}>
          <Menu>
            <MenuButton as={Box} cursor="pointer">
              <Text fontSize="md" fontWeight="bold">
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
        <Box display={{ base: 'none', md: 'block' }} mr={2}>
          <Link to="/aboutus">
            <Text fontSize="md" fontWeight="bold">
              About Us
            </Text>
          </Link>
        </Box>

        {/* Drawer for Mobile */}
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color="purple.500"
            >Menu</DrawerHeader>
            <DrawerBody>
              {/* Navigation links in the drawer */}
              <Box>
                <Link to="/">
                  <Text fontSize="md" fontWeight="bold" mb={4} display="block" color={'purple.500'}>
                    Home
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/generate">
                  <Text fontSize="md" fontWeight="bold" mb={4} display="block" color={'purple.500'}>
                    Generate
                  </Text>
                </Link>
              </Box>
              <Menu>
                <MenuButton as={Box} cursor="pointer">
                  <Text fontSize="md" fontWeight="bold" mb={4} display="block" color={'purple.500'}>
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
              <Box>
                <Link to="/aboutus">
                  <Text fontSize="md" fontWeight="bold" mb={4} display="block" color={'purple.500'}>
                    About Us
                  </Text>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
