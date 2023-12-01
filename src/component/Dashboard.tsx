import { Button, Heading, Text, Image, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import gembok from '../img/gembok.png'

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box
        bgGradient="linear(to-r, red.200, yellow.500)"
        h="95vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        textAlign="left"
        paddingX={24}
      >
        <Flex alignItems="center">
          <Box>
            <Heading as="h2" size="lg" color="black" mt={-2}>
              Kelompok 2 - K03
            </Heading>
            <Heading as="h1" size="2xl" fontWeight="bold" color="black" mt={5}>
              Concurrency Control Protocol
            </Heading>
            <Heading as="h3" size="sm" color="black" mt={12}>
              Jenis Concurrency Control Protocol:
              <br />
              1. Two-Phase Locking (2PL)
              <br />
              2. Optimistic Concurrency Control (OCC)
              <br />
              3. Multiversion Timestamp Ordering Concurrency Control (MVCC)
            </Heading>
            <Flex mt={12}>
              <Button
                as={Link}
                to="/generate"
                variant="solid"
                colorScheme="whiteAlpha"
                color="black"
                border="2px"
                mr={8}
              >
                Generate
              </Button>
              <Button
                as={Link}
                to="/aboutus"
                variant="solid"
                colorScheme="whiteAlpha"
                color="black"
                border="2px"
                mr={4}
              >
                About Us
              </Button>
            </Flex>
          </Box>
          <Image
            src={gembok}
            alt="gembok"
            width="450px"
            height="450px"
            ml={52}
            mt={-8}
          />
        </Flex>
      </Box>
      <Box
        background="yellow.100"
        h="155vh"
        display="flex"
        flexDirection="column"
        paddingX={24}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 1)"
      >
        <Heading
          as="h2"
          size="2xl"
          fontWeight="bold"
          color="black"
          mt={20}
          textAlign={'center'}
        >
          Penjelasan Algoritma
        </Heading>
        <Flex flexDirection={'column'} mt={12}>
          <Box
            background="red.100"
            border={2}
            borderRadius="3xl"
            padding={10}
            width={1000}
            mt={8}
          >
            <Heading as="h3" size="lg" color="black">
              Two-Phase Locking (2PL)
            </Heading>
            <Text color="black" mt={5}>
              Two-Phase Locking (2PL) adalah salah satu algoritma untuk mengatur
              transaksi dalam database. Algoritma ini terdiri dari dua fase,
              yaitu fase pertama adalah pertumbuhan (growth phase) dan fase
              kedua adalah penyusutan (shrinkage phase). Fase pertumbuhan adalah
              fase dimana transaksi dapat meminta kunci baru dan membebaskan
              kunci yang sudah dimiliki. Fase penyusutan adalah fase dimana
              transaksi hanya dapat membebaskan kunci yang sudah dimiliki dan
              tidak dapat meminta kunci baru.
            </Text>
          </Box>
          <Box
            background="green.100"
            border={2}
            borderRadius="3xl"
            padding={10}
            width={1000}
            mt={12}
            marginLeft={'auto'}
          >
            <Heading as="h3" size="lg" color="black">
              Optimistic Concurrency Control (OCC)
            </Heading>
            <Text color="black" mt={5}>
              Optimistic Concurrency Control (OCC) adalah salah satu algoritma
              untuk mengatur transaksi dalam database. Algoritma ini
              memungkinkan pengendalian konkurensi pada sistem basis data yang
              memungkinkan transaksi untuk bekerja secara independen tanpa
              konflik, namun dengan mekanisme deteksi dan penanganan konflik
              yang diimplementasikan pada tahap komit. Pada awalnya, algoritma
              OCC memberikan izin kepada setiap transaksi untuk melakukan
              perubahan pada data tanpa memeriksa konflik dengan transaksi lain.
              Konflik hanya diperiksa saat transaksi akan dikomit. Jika terdapat
              konflik, salah satu transaksi akan dibatalkan dan harus diulang.
              Oleh karena itu, algoritma ini memberikan kinerja yang tinggi
              untuk transaksi yang jarang mengalami konflik, tetapi memerlukan
              rollback dan pengulangan transaksi yang lebih sering pada kasus
              konflik.
            </Text>
          </Box>
          <Box
            background="blue.100"
            border={2}
            borderRadius="3xl"
            padding={10}
            width={1000}
            mt={12}
          >
            <Heading as="h3" size="lg" color="black">
              Multiversion Timestamp Ordering Concurrency Control (MVCC)
            </Heading>
            <Text color="black" mt={5}>
              Multiversion Timestamp Ordering Concurrency Control (MVCC)
              memanfaatkan timestamp pada setiap transaksi untuk menciptakan
              multiple versi data, memungkinkan transaksi untuk membaca dan
              menulis tanpa konflik. Saat komit, sistem memeriksa konflik waktu
              dan menangani dengan memutuskan transaksi mana yang diterima. MVCC
              memastikan isolasi transaksi yang tinggi, mencegah pembacaan
              tertunda, dan mengoptimalkan pengelolaan konkurensi pada sistem
              basis data.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
