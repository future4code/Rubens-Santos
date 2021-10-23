import styled from 'styled-components'
import { Button } from '@mui/material'
import { goToHome, goToTrips, goToLogin } from '../Routes/Routes'
import { useHistory } from 'react-router'

const StyledHeader = styled.div`
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
const ButtonBox = styled.div`
    position: absolute;
    right:0;
    height:8vh;
    margin-right: 10px;

`
export const Header = (props) => {
    const history = useHistory()
    
    const Buttons = () => {
        switch (history.location.pathname) {
            case "/":
                return(
                    <>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToLogin(history)}>Login</Button>
                        <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToTrips(history)}>Pacotes</Button>
                    </>
                )
                break
            case "/login":
                return (
                    <>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToHome(history)}>Home</Button>
                        <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToTrips(history)}>Pacotes</Button>
                    </>
                )
                break
            case "/trips":
                return (
                    <>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToHome(history)}>Home</Button>
                        <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToLogin(history)}>Login</Button>
                    </>
                )
                break
            case "/adm-area":
                return(
                    <>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToHome(history)}>Home</Button>
                        <Button sx={{ borderRadius: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={props.logout}>Logout</Button>
                    </>
                )
                break
        }
    }



    return (
        <StyledHeader>
            <h1>LabeX</h1>
            <ButtonBox>
                {Buttons()}
            </ButtonBox>
        </StyledHeader>
    )
}