import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from './Components/Button'
import CriarPlaylist from './Components/CriarPlaylist'
import AllPlaylists from './Components/AllPlaylists'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2941AB;
`

const InputSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:300px
`
class App extends React.Component {
  state = {
    pagecontroller: 1,
    playlistname: '',
    allplaylists:[]
  }


  createPlaylistPage = () => {
    this.setState({
      pagecontroller: 1
    })
  }

  playlists = () => {
    this.setState({
      pagecontroller: 2
    })
  }

  createOnChange = (event) => {
    this.setState({
      playlistname: event.target.value
    })
  }

  getAllPlaylists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    
    axios.get(url, {
      headers:{
        Authorization:"rubens-santos-johnson"
      }
    })

    .then((res) => {
        this.setState({
          allplaylists:res.data.result.list
        })
        
    })
    .catch((err) =>{
      console.log(err)
      alert('Ocorreu um erro')
    })
  }

  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlistname
    }

    axios.post(url, body, {
      headers:{
        Authorization:'rubens-santos-johnson'
      }
    })

    .then((res) => {
        alert('Playlist Criada')
    })
    .catch((err) =>{
      console.log(err)
      alert('Ocorreu um erro')
    })
  }

  screenChange = () => {
    switch (this.state.pagecontroller) {
      case 1:
        return (

          <CriarPlaylist
            onChange={this.createOnChange}
            createPlaylist={this.createPlaylist}
            value={this.state.name}
          />
        )

      case 2:
        
        return (
          
          <AllPlaylists
            getallplaylists={this.getAllPlaylists()}
            playlists={this.state.allplaylists}
          />
          )
    }
  }

  
  render() {
    return (
      <Wrapper>

        <div>
          <Button buttontext='Criar Playlist' onclick={this.createPlaylistPage} />
          <Button buttontext='Todas as Playlists' onclick={this.playlists} />
        </div>

        <InputSection>
          {this.screenChange()}
        </InputSection>
      </Wrapper>

    )
  }
}

export default App