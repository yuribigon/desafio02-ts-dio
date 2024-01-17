/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo/CardInfo";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string,
  }
  
const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();

    const context = useContext(AppContext);
    console.log(context);

    useEffect(() => {
        const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
        }
        getData()
    })

    const actualDate = new Date() ;

    const { id } = useParams();
    const navigate = useNavigate();
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