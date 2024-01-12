import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IButton {
    title: string,
    onClick: MouseEventHandler
  }

export const ButtonComp = ({ title, onClick }: IButton)=> {
    return (
        <Button onClick={onClick} colorScheme='whatsapp'>{title}</Button>
    )
}