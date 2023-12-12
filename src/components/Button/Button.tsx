import { Button } from '@chakra-ui/react'

interface IButton {
    title: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: () => void 
  }

export const ButtonComp = ({ title, event }: IButton)=> {
    return (
        <Button onClick={event} colorScheme='whatsapp'>{title}</Button>
    )
}