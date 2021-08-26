import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    
`

const PlaylistDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackDisplay = styled.div`
    height: 100%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    

`

const PlaylistBox = styled.div`
    display: flex;
`

const DeleteButton = styled.button`
    background-color: #2941AB;
`
const Icon = styled.img`
    width: 20px;
`

const TrackBox = styled.div`
`

const PlaylistButton = styled.button`
    width: 250px;
    background-color: #2941AB;
`

class AllPlaylists extends React.Component {
    state = {
        clickedname: ' ',
        clickedid: ' ',
        clickedtracks: [],
        clicked: false,
        playlistarraycopy: [this.props.playlists],
        allplaylists: []
    }

    componentDidMount() {
        return this.getAll();
    }

    getAll = async () => {
        try {
            const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
                headers: {
                    Authorization: "rubens-santos-johnson"
                }
            })

            this.setState({
                allplaylists: response.data.result.list
            })

        } catch (error) {
            alert('Ocorreu um erro')
        }

    }

    deletePlaylist = async (props) => {
        try {
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.id}`, {
                headers: {
                    Authorization: "rubens-santos-johnson"
                }
            })
            this.getAll()
            alert('Playlist Apagada')
        } catch (error) {
            alert('Ocorreu um erro')
            console.log(error)
        }

    }

    renderPlaylists = () =>
        this.state.allplaylists.map((playlist) => {
            return (
                <PlaylistBox key={playlist.id}>
                    <PlaylistButton onClick={() => this.getAllTracks(playlist)}>
                        <p>{playlist.name}</p>
                    </PlaylistButton>
                    <DeleteButton onClick={() => this.deletePlaylist(playlist)}><Icon src="https://img.icons8.com/ios/100/000000/delete--v1.png" /></DeleteButton>
                </PlaylistBox>
            )
        })


    getAllTracks = async (playlist) => {
        try {
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, {
                headers: {
                    Authorization: "rubens-santos-johnson"
                }
            })

            this.setState({
                clickedname: playlist.name,
                clickedid: playlist.id,
                clicked: true,
                clickedtracks: response.data.result.tracks
            })
        } catch (error) {
            alert('Ocorreu um erro')
        }

    }

    renderTracks = () =>
        this.state.clickedtracks.map((track) => {
            return (
                <TrackBox>
                    <p>Nome:{track.name}</p>
                    <p>Artista:{track.artist}</p>
                    <audio controls>
                        <source src={track.url} type='audio/mp3' />
                    </audio>
                    <button onClick={() => this.deleteTrack(track)}>Apagar</button>
                </TrackBox>
            )
        })

    deleteTrack = async (track) => {
        try {
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.clickedid}/tracks/${track.id}`, {
                headers: {
                    Authorization: "rubens-santos-johnson"
                }
            })
            alert('Música Apagada,atualize a página.')
        } catch (error) {
            alert('Ocorreu um erro')
        }

    }


    render() {

        return (
            <Wrapper>
                <PlaylistDisplay>
                    <h3>Todas as playlists</h3>
                    {this.renderPlaylists()}
                </PlaylistDisplay>
                <TrackDisplay>
                    <h3>{this.state.clickedname}</h3>
                    {this.renderTracks()}
                </TrackDisplay>
            </Wrapper>
        )
    }
}

export default AllPlaylists