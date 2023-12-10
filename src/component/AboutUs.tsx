import { Heading, Text, Flex, Box, Avatar, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Navbar from '../component/Navbar/Navbar';
import copa from '../img/copa.jpg';

const theme = extendTheme({
  styles: {
    global: {
      '.main-container': {
        bgGradient: 'linear(to-r, red.200, yellow.500)',
        minHeight: '100vh',
      },
    },
  },
});

export const AboutUs = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Navbar />
        <Flex
          direction="column"
          p={4}
          className='main-container'
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="black"
            textAlign={'center'}
            mt={8}
            mb={8}
          >
            Anggota Kelompok
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="center"
            align="center"
            flexWrap="wrap"
          >
            {/* Avatar Components */}
            <AvatarCard
              name="Jason Rivalino"
              studentId="13521008"
              imageUrl="https://media.licdn.com/dms/image/D4E03AQFk2CNS0I1IWg/profile-displayphoto-shrink_400_400/0/1691679286411?e=1706745600&v=beta&t=R0fAw0fgyMQpY9LSe2yySvkyZM4n9UwvBkxns9Uk7Kg"
            />
            <AvatarCard
              name="Muhamad Salman"
              studentId="13521010"
              imageUrl="https://media.licdn.com/dms/image/D5603AQEE9HQ1cd6rYQ/profile-displayphoto-shrink_400_400/0/1686828145381?e=1706745600&v=beta&t=XyZUmzstNHlB1NzE2Rv-9iEeZf4QWigjQP9oTfTx8ZE"
            />
            <AvatarCard
              name="Ahmad Nadil"
              studentId="13521024"
              imageUrl="https://avatars.githubusercontent.com/u/88835532?v=4"
            />
            <AvatarCard
              name="Kartini Copa"
              studentId="13521026"
              imageUrl={copa}
            />
          </Flex>
        </Flex>
      </>
    </ChakraProvider>
  );
};

interface AvatarCardProps {
  name: string;
  studentId: string;
  imageUrl: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ name, studentId, imageUrl }) => (
  <Flex direction="column" align="center" mx={4} mb={{ base: 4, md: 2 }}>
    <Avatar
      width="240px"
      height="240px"
      src={imageUrl}
      position="relative"
      zIndex={2}
      border="10px solid #BBDEFB"
      mb={4}
    />
    <Box
      bg="#BBDEFB"
      p={2}
      borderRadius="md"
      textAlign="center"
      mt={4}
      mb={4}
      color="black"
      minW="120px"
    >
      <Heading as="h2" size="md" fontWeight="bold">
        {name}
      </Heading>
      <Text fontSize="sm" fontWeight="bold">
        {studentId}
      </Text>
    </Box>
  </Flex>
);