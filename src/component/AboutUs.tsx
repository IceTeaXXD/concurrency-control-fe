import { Heading, Text, Flex, Box, Avatar } from '@chakra-ui/react'
import Navbar from '../component/Navbar/Navbar'
import copa from '../img/copa.jpg'

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        justifyContent="center"
        h="91.2vh"
        px={52}
        bgGradient="linear(to-r, red.200, yellow.500)"
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color="black"
          textAlign={'center'}
          mt={-8}
          mb={20}
        >
          Anggota Kelompok
        </Heading>
        <Flex direction="row">
          <Avatar
            width={220}
            height={220}
            src="https://media.licdn.com/dms/image/D4E03AQFk2CNS0I1IWg/profile-displayphoto-shrink_400_400/0/1691679286411?e=1706745600&v=beta&t=R0fAw0fgyMQpY9LSe2yySvkyZM4n9UwvBkxns9Uk7Kg"
            position="relative"
            zIndex={2}
            border="20px solid #BBDEFB"
            mb={-20}
            mr={20}
          />
          <Avatar
            width={220}
            height={220}
            src="https://media.licdn.com/dms/image/D5603AQEE9HQ1cd6rYQ/profile-displayphoto-shrink_400_400/0/1686828145381?e=1706745600&v=beta&t=XyZUmzstNHlB1NzE2Rv-9iEeZf4QWigjQP9oTfTx8ZE"
            position="relative"
            zIndex={2}
            border="20px solid #BBDEFB"
            mb={-20}
            mr={20}
          />
          <Avatar
            width={220}
            height={220}
            src="https://avatars.githubusercontent.com/u/88835532?v=4"
            position="relative"
            zIndex={2}
            border="20px solid #BBDEFB"
            mb={-20}
            mr={20}
          />
          <Avatar
            width={220}
            height={220}
            src={copa}
            position="relative"
            zIndex={2}
            border="20px solid #BBDEFB"
            mb={-20}
          />
        </Flex>

        <Box
          bg="#BBDEFB"
          borderRadius="lg"
          p={8}
          boxShadow="lg"
          mt={4}
          width="100%"
          height={180}
        >
          <Flex direction="row" mt={12}>
            <Flex direction="column" align="center" ml={4} mr={32}>
              <Heading
                as="h2"
                size="md"
                fontWeight="bold"
                color="black"
                textAlign={'center'}
                mb={2}
              >
                Jason Rivalino
              </Heading>
              <Text fontSize="sm" fontWeight="bold" textAlign={'center'}>
                13521008
              </Text>
            </Flex>

            <Flex direction="column" align="center" ml={2} mr={36}>
              <Heading
                as="h2"
                size="md"
                fontWeight="bold"
                color="black"
                textAlign={'center'}
                mb={2}
              >
                Muhammad Salman<br></br>Hakim Alfarisi
              </Heading>
              <Text fontSize="sm" fontWeight="bold" textAlign={'center'}>
                13521010
              </Text>
            </Flex>

            <Flex direction="column" align="center" mr={44}>
              <Heading
                as="h2"
                size="md"
                fontWeight="bold"
                color="black"
                textAlign={'center'}
                mb={2}
              >
                Ahmad Nadil
              </Heading>
              <Text fontSize="sm" fontWeight="bold" textAlign={'center'}>
                13521024
              </Text>
            </Flex>

            <Flex direction="column" align="center">
              <Heading
                as="h2"
                size="md"
                fontWeight="bold"
                color="black"
                textAlign={'center'}
                mb={2}
              >
                Kartini Copa
              </Heading>
              <Text fontSize="sm" fontWeight="bold" textAlign={'center'}>
                13521026
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
