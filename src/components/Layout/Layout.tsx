import { Box, Center } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout = ({ children }: any) => {
    return (
        <>
            <Box minHeight='100vh' backgroundColor="black">
                <Center>
                    <Header />
                </Center>
                <Center>
                    {children}
                </Center>
                <Center>
                    <Footer />
                </Center>
            </Box>
        </>
    )
}