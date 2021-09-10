import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Button = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
`

const Icon = styled.img`
    width: 40px;
    position: absolute;
    top: 50%;
    left:50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

function Buttons(props) {
    return (
        <Button onClick={props.choice}><Icon src={props.src}></Icon></Button>
    )
}

export default Buttons