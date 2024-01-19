/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo/CardInfo";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext/AppContext";


interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string,
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);
    console.log('retorno da página conta', isLoggedIn);

    !isLoggedIn && navigate('/');

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const actualDate = new Date();


    if (userData && id !== userData.id) {
        alert('Usuário não encontrado')
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === null || userData === undefined ?
                        (
                            <Spinner size='xl' />
                        ) :
                        (
                            <><CardInfo mainContent={`Bem vindo, ${userData?.name}!`} content={`${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()} - ${actualDate.getHours()}:${(actualDate.getMinutes() < 10 ? '0' : '') + actualDate.getMinutes()}`} /><CardInfo mainContent="Saldo da conta:" content={`R$ ${userData?.balance.toFixed(2)}`} /></>
                        )
                }
            </SimpleGrid>
        </Center>
    );
}

export default Conta;