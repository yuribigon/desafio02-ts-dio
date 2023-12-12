import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import { Heading, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import { ButtonComp } from "../Button/Button"
import { login } from "../../services/login"


export const Card = () => {
    return (
        <Stack spacing='3'>
            <Heading as='h3' size='md' textAlign='center'>Faça seu login</Heading>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
              </InputLeftElement>
              <Input 
                placeholder='E-mail' 
                size='md'
                variant='flushed'
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <LockIcon color='gray.300' />
              </InputLeftElement>
              <Input 
                placeholder='Senha' 
                size='md'
                variant='flushed'
                type='password'
              />
            </InputGroup>
            <ButtonComp title='Entrar' event={login}/>
          </Stack>
    )
}