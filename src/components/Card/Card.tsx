/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {
  return (
    <Box 
      backgroundColor={"white"} 
      borderRadius="25px" 
      padding="15px" 
      minWidth="30vw" 
      maxWidth="50vw"
    >
      {children}
    </Box>
  )
}