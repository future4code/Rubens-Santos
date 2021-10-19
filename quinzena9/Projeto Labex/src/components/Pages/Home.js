import styled from "styled-components"
import { Button } from "@mui/material/"
import { useHistory, useParams } from "react-router-dom";


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

    const goToLogin = () => {
        history.push('/login')
    }

    const goToTrips = () => {
        history.push('/trips')
    }

    return (
        <Wrapper>
            <Header>
                <h1>LabeX</h1>
                <AdmButtonBox>
                    <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }}  variant='outlined' onClick={() => goToLogin()} >Login</Button>
                    <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToTrips()} >Pacotes</Button>
                </AdmButtonBox>
            </Header>
            <Main>
                <WelcomeBox>
                    <TextBox>
                        <Title>Welcome to LabeX</Title>
                        <p>Minim qui eu duis Lorem tempor ut esse ad id culpa adipisicing laborum eiusmod amet.sunt.</p>
                    </TextBox>
                    <Button style={{ maxWidth: '200px', maxHeight: '60px', minWidth: '200px', minHeight: '60px' }} variant='contained' size='large' onClick={() => goToTrips()} >Trips</Button>
                </WelcomeBox>
            </Main>
        </Wrapper>
    )
}