import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ContaInfo = () => {

    return (
        <>
            <Text>
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                Conta
            </Link>
        </>
    )
}

export default ContaInfo