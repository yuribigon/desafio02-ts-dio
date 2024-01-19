import { Flex, Text, Button, Box, Center, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
    const {setIsLoggedIn, isLoggedIn} = useContext(AppContext);
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({login: false});
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <Flex minWidth='100vw' backgroundColor='gray' padding='5px'>
            <Box width='100vw'>
                <Center color='white'>
                    <Text fontSize='3xl'>Sorteador Online</Text>
                </Center>
            </Box>
            <Spacer />
            { isLoggedIn &&
            <Box >
                <Center>
                    <Button
                        onClick={() => logout()}
                        >
                        Sair
                    </Button>
                </Center>
            </Box>
                    }
        </Flex>
    )
}