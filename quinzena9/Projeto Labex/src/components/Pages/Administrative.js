import styled from "styled-components"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { CreateTripForm } from "../CreateTripForm"
import { DeleteTrip } from '../DeleteTrip'

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
const Header = styled.div`
    height: 8vh;
    width: 100%;
    background-color: purple;
    color: white;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

    @media(max-Width:600px){
        justify-content: flex-start;
        padding-left:10px;
    }
`
const AdmButtonBox = styled.div`
    position: absolute;
    right:0;
    height:8vh;
    margin-right: 10px;
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

    const goToHome = () => {
        history.push('/')
    }

    const checkLogin = (message) => {
        const authKey = localStorage.getItem('LoginAuthKey')
        if (!authKey) {
            alert(message)
            history.push('/login')
        }
    }

    const Logout = () => {
        localStorage.removeItem('LoginAuthKey')
        checkLogin('Desconectado com Sucesso')
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
            <div>
                <Header>
                    <h1>LabeX</h1>
                    <AdmButtonBox>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} disableElevation variant='outlined' onClick={() => goToHome()} >Home</Button>
                        <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => Logout()} >Logout</Button>
                    </AdmButtonBox>
                </Header>
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
            </div>
        </Wrapper>
    )
}