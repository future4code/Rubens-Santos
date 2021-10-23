import styled from "styled-components"
import axios from "axios"
import TripCard from "../Components/TripCard"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "../Components/LoadingSpinner"
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
    opacity: 1;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const List = styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    margin-left: auto;
    justify-content: center;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto ;
    overflow: scroll;
    overflow-x: hidden;

        ::-webkit-scrollbar {
        height: 15px;
        }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
        }

    @media(max-Width:600px){
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y:scroll;

        ::-webkit-scrollbar-track {
            display: none;
        }
        ::-webkit-scrollbar-thumb {
            display: none;
        }
    }
`
export const Trips = () => {
    useEffect(() => {
        getTrips()
    }, [])

    const [trips, setTrips] = useState([])
    const [Loading, setLoading] = useState('true')


    const history = useHistory()
    const goToHome = () => {
        history.push('/')
    }

    const getTrips = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rubens/trips'
        try {
            const response = await axios.get(url)
            setTrips(response.data.trips)
            setLoading('false')
        } catch (error) {

        }
    }

    const ListTrips = () =>

        trips.map((trip) => {
            return (
                <TripCard
                    name={trip.name}
                    planet={trip.planet}
                    description={trip.description}
                    days={trip.durationInDays}
                    date={trip.date}
                />
            )
        })


    const ShowLoading = () => {
        switch (Loading) {
            case 'true':
                return <LoadingSpinner />
                break
        }
    }
    return (
        <Wrapper>
            <Header/>        
            <Main>
                <WelcomeBox>
                    <List>
                        {ShowLoading()}
                        {ListTrips()}
                    </List>
                </WelcomeBox>
            </Main>
        </Wrapper>
    )
}