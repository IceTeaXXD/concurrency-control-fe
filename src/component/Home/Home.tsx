import { FormEvent, ChangeEvent, useState, useEffect } from 'react'
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import axios from 'axios'

export const Home = () => {
  const [sequence, setSequence] = useState('')
  const [result, setResult] = useState('')
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  )
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [data, setData] = useState<TransactionHistory[] | null>(null)
  const [columns, setColumns] = useState<string[]>([])

  useEffect(() => {
    setData(null)
    setResult('')
  }, [sequence])

  interface TransactionHistory {
    transaction: number
    table: string
    operation: string
    status: string
  }

  async function TwoPhaseLocking() {
    const URL = 'https://api-concurrency-control.vercel.app'
    // const URL = 'http://127.0.0.1:5000/'
    const response = await axios.post(URL + '/2pl', {
      sequence: sequence,
    })

    if (response.data.result) {
      setError(false)
      setData(null)
      setColumns([])
      setResult(response.data.result)
      setState('success')

      // Transform response data into the desired format for the table
      const transactionHistory = response.data.history
      const transactionHistoryTable: TransactionHistory[] = []
      for (let i = 0; i < transactionHistory.length; i++) {
        const history = transactionHistory[i]
        const transaction = history.transaction
        const table = history.table
        const operation = history.operation
        const status = history.status
        transactionHistoryTable.push({
          transaction: transaction,
          table: table,
          operation: operation,
          status: status,
        })
      }
      setData(transactionHistoryTable)

      // Set columns for each unique transaction name
      const columns: string[] = []
      for (let i = 0; i < transactionHistoryTable.length; i++) {
        const transaction = transactionHistoryTable[i].transaction
        if (!columns.includes(transaction.toString())) {
          columns.push(transaction.toString())
        }
      }
      setColumns(columns)

      setTimeout(() => {
        setState('initial')
      }, 1000)
    } else {
      setError(true)
      setData(null)
      setState('initial')
      setErrorMsg(response.data.error)
    }
  }

  const dataTable = data ? (
    <Table mt={5}>
      <Thead fontWeight={'bold'} bg={'blue.500'}>
        {columns.map((column) => (
          <Th
            key={column}
            color={'white'}
            textAlign={'center'}
            style={{ border: '1px solid gray' }}
          >
            T{column}
          </Th>
        ))}
      </Thead>
      <Tbody>
        {data.map((row) => (
          <Tr key={row.transaction}>
            {columns.map((column) => (
              <Td
                key={column}
                textAlign={'center'}
                style={{ border: '1px solid gray' }}
              >
                {row.transaction.toString() === column ? (
                  <div>
                    {row.status === 'Success' ? (
                      <div>
                        {row.operation}({row.table})
                      </div>
                    ) : row.status === 'Abort' ? (
                      <div style={{ color: 'red', fontWeight: 'bold' }}>
                        {row.operation}
                      </div>
                    ) : row.status === 'Commit' ? (
                      <div style={{ color: 'green', fontWeight: 'bold' }}>
                        {row.operation}
                      </div>
                    ) : row.status === 'Queue' ? (
                      <div style={{ color: 'goldenrod', fontWeight: 'bold' }}>
                        {row.status}: {row.operation}({row.table})
                      </div>
                    ) : (
                      <div>
                        {row.operation}({row.table})
                      </div>
                    )}
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </Td>
            ))}
          </Tr>
        ))}
        <Tr>
          <Td
            colSpan={columns.length}
            style={{
              textAlign: 'center',
              color: 'green',
              fontWeight: 'bold',
              border: '1px solid gray',
            }}
          >
            Transaction Completed!
          </Td>
        </Tr>
      </Tbody>
    </Table>
  ) : null

  return (
    <Flex
      minH={'100vh'}
      align={'flex-start'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      pt={10}
    >
      <Container
        maxW={'3xl'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        overflowX={'auto'}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
        >
          Concurrency Control
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            setState('submitting')
            TwoPhaseLocking()
          }}
        >
          <FormControl w={{ base: '100%', md: '100%' }}>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              required
              placeholder={'Input your sequence'}
              aria-label={'Input your sequence'}
              value={sequence}
              disabled={state !== 'initial'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSequence(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '20%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              type={state === 'success' ? 'button' : 'submit'}
              w="100%"
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'black'}
          fontWeight={'bold'}
        >
          {error ? errorMsg : result ? 'Final Schedule: ' + result : ''}
        </Text>
        {dataTable}
      </Container>
    </Flex>
  )
}
