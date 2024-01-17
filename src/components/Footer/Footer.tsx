import { Box, Stack, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box marginBottom="1px">
            <Stack spacing='2' padding='15px'>
                <Text fontSize='xs' color='white'>
                    YB - 2023
                </Text>
            </Stack>
        </Box>
    )
}