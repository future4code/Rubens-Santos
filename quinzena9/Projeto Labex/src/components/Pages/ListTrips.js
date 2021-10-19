import styled from "styled-components"
import axios from "axios"
import TripCard from "../TripCard"
import { Button } from "@mui/material/"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "../LoadingSpinner"

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

`
const AdmButtonBox = styled.div`
    position: absolute;
    right:0;
    height:8vh;
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
    height: 55%;
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
    display: flex;

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
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
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
            <Header>
                <h1>LabeX</h1>
                <AdmButtonBox>
                    <Button sx={{ borderRadius: 0, borderRight: 0, borderBottom: 0, borderTop: 0, borderColor: "black", minHeight: '100%', color: "white", }} variant='outlined' onClick={() => goToHome()}>Home</Button>
                </AdmButtonBox>
            </Header>
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