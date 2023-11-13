"use client"

import { FormEvent, ChangeEvent, useState } from "react"
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex
} from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import axios from "axios"

export const Home = () => {
  const [sequence, setSequence] = useState("")
  const [result, setResult] = useState("")
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  )
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  async function TwoPhaseLocking() {
    const URL = "https://api-concurrency-control.vercel.app"
    // const URL = "http://127.0.0.1:5000/" 
    const response = await axios.post(
      URL + "/2pl",
      {
        sequence: sequence
      }
    )
    console.log(response.data)
    if (response.data.result) {
      setError(false)
      setResult(response.data.result)
      setState("success")
      setTimeout(() => {
        setState("initial")
      }, 1000)
    } else {
      setError(true)
      setState("initial")
      setErrorMsg(response.data.error)
    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Concurrency Control
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            setState("submitting")
            // fetch to backend using axios
            TwoPhaseLocking()
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400"
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              required
              placeholder={"Input your sequence"}
              aria-label={"Input your sequence"}
              value={sequence}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSequence(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error ? errorMsg : result}
        </Text>
      </Container>
    </Flex>
  )
}
