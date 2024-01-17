/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import { Box, Center, Heading, Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react"
import { ButtonComp } from "../Button/Button"
import { login } from "../../services/login"
import { useEffect, useState } from "react"
import { api } from "../../api"

interface UserData {
  email: string,
  password: string,
  name: string,
}

export const Card = () => {
  const [email, setEmail] = useState<string>('');
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  })

  return (
    <Box backgroundColor={"white"} borderRadius="25px" padding="15px" minWidth="30vw" maxWidth="50vw">
      {userData === null || userData === undefined ?
        <Spinner size='xl' /> :
        <>
          <Heading as='h3' size='md' textAlign='center'>Faça seu login</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <EmailIcon color='gray.300' />
            </InputLeftElement>
            <Input
              placeholder='E-mail'
              size='md'
              variant='flushed'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <LockIcon color='gray.300' />
            </InputLeftElement>
            <Input
              placeholder='Senha'
              size='md'
              variant='flushed'
              type='password' />
          </InputGroup>
          <Center paddingTop="10px">

            <ButtonComp title='Entrar' onClick={() => login(email)} />
          </Center>
        </>
      }
    </Box>
  )
}