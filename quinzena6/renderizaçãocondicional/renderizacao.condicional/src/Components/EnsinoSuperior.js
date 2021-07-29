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
                <h3>Etapa 2 - Ensino Superior</h3>
                <p>1. Qual é o seu nome?</p>
                <input />
                <p>2. Qual é a sua idade?</p>
                <input />
                <p>3. Qual é o seu Email?</p>
                <input />

                <p>4. Qual é a sua escolaridade?</p>
                <select name="cars" >
                    <option >Ensino Médio Imcompleto</option>
                    <option >Ensino Médio Completo</option>
                    <option >Ensino Superior Imcompleto</option>
                    <option >Ensino Superior Completo</option>
                </select>
                <button onClick={this.props.avança}>Avançar</button>

            </Wrapper>
        )
    }
}

export default DadosGerais