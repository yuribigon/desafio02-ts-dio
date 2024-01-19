import { Box, Center, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { ButtonComp } from "../components/Button/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn) {
           return alert("E-mail inválido")
        }
        setIsLoggedIn(true);
        changeLocalStorage({ login: true })
        navigate('/conta/1');
    }
    
    return (
        <Box padding="25px">
            <Card>
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

                        <ButtonComp title='Entrar' onClick={() => validateUser(email)} />
                    </Center>
                </>
            </Card>
        </Box>


    );
}

export default Home;