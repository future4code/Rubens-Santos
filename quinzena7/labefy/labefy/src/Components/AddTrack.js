import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Select = styled.select`
    width: 250px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 20px;

    :focus{
        outline: none;
    }

`
class AddTrack extends React.Component {
    state = {
        trackname: '',
        trackartist: '',
        trackurl: '',
        trackid: '',
        allplaylists: [],
        option: 'Escolha a Playlist'

    }



    componentDidMount() {
        return this.getAll()
    }


    trackNameOnChange = (event) => {
        this.setState({ trackname: event.target.value })
    }

    trackArtistOnChange = (event) => {
        this.setState({ trackartist: event.target.value })
    }

    trackUrlOnChange = (event) => {
        this.setState({ trackurl: event.target.value })
    }

    OptionOnChange = (event) => {
        this.setState({ option: event.target.value })

    }


    createOption = () =>
        this.state.allplaylists.map((list) => {
            return (
                <option key={list.id} id={list.id}>{list.name}</option>

            )
        })

    createbutton = () =>
        this.state.allplaylists.map((list) => {
            if (list.name === this.state.option) {
                return (
                    <div>
                        <button onClick={() => this.addTrackToPlaylist(list)}>Adicionar</button>
                    </div>
                )
            }
        })

    addTrackToPlaylist = (props) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.id}/tracks`
        const body = {
            name: this.state.trackname,
            artist: this.state.trackartist,
            url: this.state.trackurl
        }


        axios.post(url, body, {
            headers: {
                Authorization: "rubens-santos-johnson"
            }
        })

            .then((res) => {
                console.log('funcionou')
                this.setState({
                    trackname: '',
                    trackartist: '',
                    trackurl: '',
                })
            })
            .catch((err) => {
                console.log(err)
                console.log(this.state.trackid)
            })
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





    render() {



        return (
            <Wrapper>
                <Select onChange={this.OptionOnChange}>
                    <option>{this.state.option}</option>
                    {this.createOption()}
                </Select>

                <input required placeholder='Nome da Música' onChange={this.trackNameOnChange} value={this.state.trackname} />
                <input required placeholder='Artista' onChange={this.trackArtistOnChange} value={this.state.trackartist} />
                <input required placeholder='Url' onChange={this.trackUrlOnChange} value={this.state.trackurl} />
                {this.createbutton()}




            </Wrapper>
        )
    }

}

export default AddTrack