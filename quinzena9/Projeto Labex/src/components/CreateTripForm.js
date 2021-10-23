import React from "react"
import { useState } from "react"
import styled from 'styled-components'
import { Button } from "@mui/material/"
import axios from "axios"


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width:300px;
    height:15px;
    padding:10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 20px;
    text-align: center;

    :focus{
        outline:none
    }

`
const Date = styled(Input)`
    text-align:start
    `
const Description = styled.textarea`
    width:300px;
    height:50px;
    border-radius: 20px;
    padding:10px;
    margin-bottom: 20px;

    :focus{
        outline:none
    }
`
const Select = styled.select`
    width:300px;
    margin-bottom: 10px;
    padding:10px;
    border-radius: 20px;
    text-align: center;

    :focus{
        outline:none
    }
`

export const CreateTripForm = () => {
    const [form, setForm] = useState({ name: '', planet: 'Mercúrio', date: '', description: '', duration: '' })

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const CreateTrip = async (event) => {
        event.preventDefault()

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rubens/trips'
        const token = localStorage.getItem('LoginAuthKey')
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration
        }

        try {
            const response = await axios.post(url, body, {
                headers: {
                    auth: token
                }
            })

            alert('Viagem Criada com Sucesso.')
            setForm({ name: '', planet: '', date: '', description: '', duration: '' })

        } catch (error) {
            alert('Ocorreu um erro')
        }
    }

    return (
        <Wrapper>
            <Form onSubmit={CreateTrip} >
                <label>Planet</label>
                <Select onChange={onChange} name='planet' value={form.planet}>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>

                </Select>
                <label>Trip Name</label>
                <Input type='text' required name='name' placeholder='Trip Name' onChange={onChange} value={form.name} />

                <label>Date</label>
                <Date type='date' required name='date' onChange={onChange} value={form.date} />

                <label>Duration</label>
                <Input type='number' required name='duration' placeholder='Duration in Days' onChange={onChange} value={form.duration} />

                <label>Descrição</label>
                <Description required name='description' onChange={onChange} value={form.description} />

                <Button type='submit' variant='contained'>Criar</Button>

            </Form>
        </Wrapper>
    )
}