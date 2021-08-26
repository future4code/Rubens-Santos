import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const StyledInput = styled.input`
    padding: 3px;
    border-radius: 10px;
    border: solid;
    text-align: center;
    margin-bottom: 10px;

    :focus{
        outline: none;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class CriarPlaylist extends React.Component{

   
    render(){
         
  
        return(
            <Wrapper>
            <h3>Criar Playlist</h3>
            <StyledInput required placeholder='Nome da Playlist' onChange={this.props.onChange} value={this.props.value}/>
            <button onClick={this.props.createPlaylist}>Criar</button>
            </Wrapper>
           )
    }
}


export default CriarPlaylist