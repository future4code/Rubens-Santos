import styled from "styled-components"
import { Button } from "@mui/material/"
import { useHistory, useParams } from "react-router-dom";
import { goToTrips } from "../Routes/Routes";
import { Header } from "../Components/Header";


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
    justify-content: center;
`
const TextBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    align-items: center;
`
const Title = styled.h3`
    align-self: center;
    font-size: 40px;

    @media(max-width:550px){
        font-size: 30px;
    }
`

export const Home = () => {
    const history = useHistory()


    return (
        <Wrapper>
            <Header/>
            <Main>
                <WelcomeBox>
                    <TextBox>
                        <Title>Welcome to LabeX</Title>
                        <p>Minim qui eu duis Lorem tempor ut esse ad id culpa adipisicing laborum eiusmod amet.sunt.</p>
                    </TextBox>
                    <Button style={{ maxWidth: '200px', maxHeight: '60px', minWidth: '200px', minHeight: '60px' }} variant='contained' size='large' onClick={() => goToTrips(history)} >Trips</Button>
                </WelcomeBox>
            </Main>
        </Wrapper>
    )
}