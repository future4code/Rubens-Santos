import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Buttons from '../Buttons'
import './styles'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Text = styled.p`
    font-size: 30px;
    margin: 0 0 2px 10px;
`
const TextBio = styled.p`
    margin: 0;
    font-weight: bold;
    margin: 0 0 2px 10px;

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


const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 90%;
    position: relative;    
    overflow: hidden;
    border-radius: 10px;
`

const Photo = styled.img`
    margin: auto;
    height: auto;
    width: 100%;
    border-radius: 5px;
    position:absolute;
`

const PersonInfo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    color: white;
    width: 100%;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

`
const BlurredBackground = styled.img`
    position: relative;
    box-shadow: 5px 10px 30px #888888;
    height: 80%;
    width: 100% ;
    filter: blur(40px);
`

const ButtonsSections = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 80px;
`
const ClearMatches = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 20px;

`

function TelaInicial() {
    const [name, setName] = useState('')
    const [photo, setphoto] = useState('')
    const [age, setAge] = useState('')
    const [bio, setBio] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/person')
            setName(response.data.profile.name)
            setphoto(response.data.profile.photo)
            setAge(response.data.profile.age)
            setBio(response.data.profile.bio)
            setId(response.data.profile.id)

        } catch (error) {
            console.log(error)
        }
    }

    const Match = async () =>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/choose-person'
        const body = {
            id:id,
            choice: true
        }

        try{
            const response = await axios.post(url, body,{
                header:'Content-Type: application/json'
            })
            getProfile()
        }catch(error){
            console.log(error)
        }
    }

    
    const Pass = async () =>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/choose-person'
        const body = {
            id:id,
            choice:false
        }
        try{
            const response = await axios.post(url, body,{
                header:'Content-Type: application/json'
            })
            console.log(response)
            getProfile()
        }catch(error){
            console.log(error)
        }
    }

    const Clear = async () =>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rubens/clear'
        try{
            const response = await axios.put(url,{
                header:'Content-Type: application/json'
            })
        }catch(error){
            console.log(error)
        }
    }

    return (
        <Wrapper>
            <Header>
                <Logo src='https://i.imgur.com/OKVKBpo.png'/>
            </Header>
            <Profile>
                <BlurredBackground src={photo}></BlurredBackground>
                <Photo src={photo}></Photo>
                <PersonInfo>
                    <Text><strong>{name}</strong> {age}</Text>
                    <TextBio>{bio}</TextBio>
                </PersonInfo>
            </Profile>
            <ButtonsSections>
                <Buttons
                    choice={Match}
                    src='https://cdn.icon-icons.com/icons2/2091/PNG/512/heart_icon_128499.png'
                />
                <Buttons
                    choice={Pass}
                    src='https://cdn3.iconfinder.com/data/icons/universal-set-4/26/universal-set-4019-512.png'
                />
            </ButtonsSections>
            <ClearMatches onClick={Clear}>Clear</ClearMatches>

        </Wrapper>
    )
}

export default TelaInicial