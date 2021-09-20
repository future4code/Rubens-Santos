import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import { LoadingSpinner } from "./LoadingSpinner"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const DeleteButton = styled.button`
    height: 100%;
    background-color: transparent;
`
const TripBox = styled.div`
    height: 50px;
    width: 150%;
    display: flex;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: purple;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

    @media(max-Width:600px){
        width: 100%;
    }

`
export const DeleteTrip = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState('true')

    useEffect(() => {
        getTrips()

    }, [])
    const getTrips = async () => {
        setLoading('false')
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rubens/trips'
        try {
            const response = await axios.get(url)
            setTrips(response.data.trips)

        } catch (error) {
            alert('Ocorreu um erro')
        }
    }
    const deleteTrip = async (id) => {
        const token = localStorage.getItem('LoginAuthKey')
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rubens/trips/${id}`
        try {
            const response = await axios.delete(url, {
                headers: {
                    auth: token
                },
            })
            getTrips()

        } catch (error) {
            console.log(error)
        }
    }
    const ListTrips = () =>
        trips.map((trip) => {
            return (
                <TripBox>
                    <p>{trip.name}</p>
                    <DeleteButton onClick={() => deleteTrip(trip.id)}></DeleteButton>
                </TripBox>
            )
        })

    const Loading = () => {
        switch (loading) {
            case 'true':
                return <LoadingSpinner />
                break
            case 'false':
                return (
                    <Wrapper>
                        {ListTrips()}
                    </Wrapper>
                )
        }
        
    }
    return (
        <div>
            {Loading()}
        </div>
    )
}