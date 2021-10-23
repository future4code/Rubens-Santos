import styled from "styled-components"
import axios from "axios"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useState, useEffect } from "react"
import { LoadingSpinner } from "../Components/LoadingSpinner";
import { goToHome } from "../Routes/Routes";
import { Base_URL } from "../Constants/Url";
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
    
    useEffect(() => {
        const authKey = localStorage.getItem('LoginAuthKey')
        if (authKey) {
            history.push('/adm-area')
        }
    }, [])



    const Login = async (event) => {
        event.preventDefault()
        setLoading('true')
        const url = `${Base_URL}/login`
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
                <Header/>
                   
                <Main>
                    <WelcomeBox>
                        {ShowLoading()}
                    </WelcomeBox>
                </Main>
        </Wrapper>
    )
}