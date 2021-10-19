import styled from "styled-components"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useState, useEffect } from "react"
import Alert from '@mui/material/Alert';
import { LoadingSpinner } from "../LoadingSpinner";


import axios from "axios"

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
const Form = styled.form`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    @media(max-Width:600px){
        width: 90%;
    }

`
const Input = styled.input`
    width: 100%;
    height: 25px;
    text-align: center;
    border: none;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 10px;
    :focus{
        outline: none;
    }

    
`


export const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState('false')

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    useEffect(() => {
        const authKey = localStorage.getItem('LoginAuthKey')
        if (authKey) {
            history.push('/adm-area')
        }
    }, [])



    const Login = async (event) => {
        event.preventDefault()
        setLoading('true')
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rubens/login'
        const body = {
            email: form.email,
            password: form.password
        }
        try {
            const response = await axios.post(url, body, {
                header: 'Content-Type: application/json'
            })
            localStorage.setItem('LoginAuthKey', response.data.token)
            history.push('/adm-area')
        } catch (error) {
            return (
                alert('Invalid Email or Password')
            )
        }
    }

    const ShowLoading = () => {
        switch (loading) {
            case 'true':
                return <LoadingSpinner />

            case 'false':
                return (
                    <Form onSubmit={Login} >
                        <h3>Login</h3>
                        <Input type='email' name='email' placeholder='Email' required value={form.email} onChange={onChange} />
                        <Input type='password' name='password' placeholder='Password' required value={form.password} onChange={onChange} />
                        <Button type='submit' variant='contained' size='large' >Login</Button>
                    </Form>
                )
        }
    }
    return (
        <Wrapper>
                <Header>
                    <h1>LabeX</h1>
                    <AdmButtonBox>
                        <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToHome()}>Home</Button>
                    </AdmButtonBox>
                </Header>
                <Main>
                    <WelcomeBox>
                        {ShowLoading()}
                    </WelcomeBox>
                </Main>
        </Wrapper>
    )
}