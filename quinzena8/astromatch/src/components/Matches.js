import styled from "styled-components"
import axios from "axios"
import React, { useState, useEffect } from 'react'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Photo = styled.img`
    width: 40px;
    height: 60px;
    border-radius: 10%;
    margin-right: 60px;
`
const MatchBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    border: solid;
    border-width: 0.1px;
    padding: 5px;
    width: 200px;
    height: 60px;

`
const ClearMatches = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 20px;

`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
`

const Logo = styled.img`
    width: 160px;
    height: 60px;
`


function Matches() {
    const [allmatches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/matches'
        try {
            const response = await axios.get(url)
            setMatches(response.data.matches)
        } catch (error) {
            console.log(error)
        }
    }


    const MapMatches = () =>
        allmatches.map((matches) => {
            return (
                <MatchBox key={matches.id}>
                    <Photo src={matches.photo}></Photo>
                    <p>{matches.name}</p>
                </MatchBox>
            )
        })

    
  const Clear = async () =>{
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/clear'
    try{
        const response = await axios.put(url,{
            header:'Content-Type: application/json'
        })
        getMatches()
    }catch(error){
        console.log(error)
    }
}

    return (
        <Wrapper>
             <Header>
                <Logo src='https://i.imgur.com/OKVKBpo.png'/>
            </Header>
            <h3>Seus Matches</h3>
            {MapMatches()}
            <ClearMatches onClick={Clear}>Clear</ClearMatches>

        </Wrapper>
    )
}

export default Matches
