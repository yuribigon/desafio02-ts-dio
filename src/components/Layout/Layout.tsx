import { Box, Center } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout = ( { children } : any) => {
    return (
        <>
            <Center>
                <Header />
            </Center>
            <Center>
                <Box minHeight='50vh' minWidth='40vw' padding='25px' borderRadius='25px' backgroundColor="white">
                    <Center>
                        { children }
                    </Center>
                </Box>
            </Center>
            <Center>
                <Footer />
            </Center>
        </>
    )
}