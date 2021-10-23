import styled from "styled-components"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { CreateTripForm } from "../Components/CreateTripForm"
import { DeleteTrip } from '../Components/DeleteTrip'
import { Header } from "../Components/Header"

const Wrapper = styled.div`
    height: 100vh;
    background-image: url('https://i.imgur.com/U3J1MOt.jpg');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
`
const Main = styled.div`
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
const WelcomeBox = styled.div`
    width: 90%;
    height: 100%;
    opacity: 0.9;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Buttons = styled.div`
    height: 5vh;
    width: 30%;
    margin-top: 2%;
    display: flex;
    justify-content: space-evenly;

    @media(max-Width:600px){
        flex-direction: column;
        align-items: center;
        margin-top: 10%;
        justify-content: space-between;
        height: 20%;

    }
`
const List = styled.div`
    margin-top: 10px;
    height: 100%;
    width: 50%;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-Width:600px){
        width: 80%;
    }
`


export const Administrative = () => {
    const [page, setPage] = useState('delete')

    useEffect(() => {
        checkLogin('Você não está conectado.')
    }, [])

    const history = useHistory()

    const checkLogin = (message) => {
        const authKey = localStorage.getItem('LoginAuthKey')
        if (!authKey) {
            alert(message)
            history.push('/login')
        }
    }

    const Logout = () => {
        localStorage.removeItem('LoginAuthKey')
        alert('Desconectado com Sucesso.')
        history.push('/login')
    }

    const CreateorDeleteTrip = () => {
        switch (page) {
            case 'create':
                return (
                    <CreateTripForm />
                )
                break
            case 'delete':
                return (
                    <DeleteTrip />
                )
        }
    }

    const goToCreate = () => {
        setPage('create')
    }

    const goToDelete = () => {
        setPage('delete')
    }

    return (
        <Wrapper>
                <Header
                    logout={Logout}
                />
                <Main>
                    <WelcomeBox>
                        <Buttons>
                            <Button variant='contained' sx={{ minWidth: 170, }} onClick={goToDelete} >Apagar Viagens</Button>
                            <Button variant='contained' sx={{ minWidth: 170, }} onClick={goToCreate} >Criar Viagem</Button>
                        </Buttons>
                        <List>
                            {CreateorDeleteTrip()}
                        </List>
                    </WelcomeBox>
                </Main>
        </Wrapper>
    )
}