import { props } from 'bluebird'
import { div } from 'prelude-ls'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display:flex ;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    height: 80px;
    margin-bottom: 10px;
    padding: 0px 10px;
`
const ContainerTexto = styled.div`
    align-items: center;
`

const Titulo = styled.h3`
    display: inline;
`

const Conteudo = styled.p`
    display: inline;
    margin-left: 2px;
`

const Image = styled.img`
    width: 40px;
    margin-right:10px;
`


const CardPequeno = (props) => {

    return (
        <Container>
            <Image src={props.image} />

            <ContainerTexto>

                <Titulo>{props.titulo}:</Titulo>
                <Conteudo>{props.conteudo}</Conteudo>

            </ContainerTexto>
        </Container>
    )

}


export default CardPequeno