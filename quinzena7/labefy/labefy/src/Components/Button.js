import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #1ED760;
    border-radius: 50px;
    padding: 15px;
    width: 150px;
    margin-right: 30px;
    border: solid;
    font-weight: bold;
    color: #2941AB;
    border-color: #1ED760;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    :hover{
        border-color: goldenrod;
    }
    :active{
        border-color:#1ED760;
    }
`

class Button extends React.Component{
    render(){
        return(
            <StyledButton onClick={this.props.onclick}>{this.props.buttontext}</StyledButton>
        )
    }
}

export default Button