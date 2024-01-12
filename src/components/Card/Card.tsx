/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import { Heading, Input, InputGroup, InputLeftElement, Spinner, Stack } from "@chakra-ui/react"
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
  const [ email, setEmail ] = useState<string>('');
  const [userData, setUserData ] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  })
  
    return (
        <Stack spacing='3'>
          { userData === null || userData === undefined ?
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
              </InputGroup><ButtonComp title='Entrar' onClick={() => login(email)} />
            </>
          }
          </Stack>
    )
}