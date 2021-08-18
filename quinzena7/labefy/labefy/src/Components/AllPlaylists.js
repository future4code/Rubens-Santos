import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class AllPlaylists extends React.Component {

    renderPlaylists = () =>
        this.props.playlists.map((playlist, index) => {
            return(
                <div key={index}>
                    <p>{playlist.name}</p>
                </div>
            )
        })
    


    render() {


        return (
            <div>
                <h3>Todas as playlists</h3>
                {this.props.getallplaylists}
                {this.renderPlaylists()}
            </div>
        )
    }
}

export default AllPlaylists