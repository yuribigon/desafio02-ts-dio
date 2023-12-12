import { Stack, Heading } from "@chakra-ui/react"


export const Header = () => {
    return (
        <Stack spacing='2' padding='15px'>
            <Heading as='h2' size='xl' color='white'>
                Sorteador Online
            </Heading>
        </Stack>
    )
}