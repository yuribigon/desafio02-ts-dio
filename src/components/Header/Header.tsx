import { Stack, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../App";


export const Header = () => {
    const context = useContext(AppContext);
    console.log(context);
    
    return (
        <Stack spacing='2' padding='15px'>
            <Heading as='h2' size='xl' color='white'>
                Sorteador Online
            </Heading>
        </Stack>
    )
}