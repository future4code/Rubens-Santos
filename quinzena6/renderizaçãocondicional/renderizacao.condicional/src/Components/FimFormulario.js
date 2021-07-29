import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
`
class DadosGerais extends React.Component {

    render() {
        return (
            <Wrapper>
               <h1>Obrigado por responder o formulário!</h1>
            </Wrapper>
        )
    }
}

export default DadosGerais