import React from 'react'
import styled from 'styled-components'
import DadosGerais from './Components/DadosGerais'
import EnsinoSuperior from './Components/EnsinoSuperior'
import GeraisEnsino from './Components/GeraisEnsino'
import FimFormulario from './Components/FimFormulario'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default class App extends React.Component {
  state = {
    controle: 1
  }

  escolheEtapa = () => {
    switch (this.state.controle) {
      case 1:
        return (<DadosGerais avança={this.PassaEtapa}/>)
      case 2:
        return (<EnsinoSuperior avança={this.PassaEtapa}/>)
      case 3:
        return(<GeraisEnsino avança={this.PassaEtapa}/>)
      case 4:
        return(<FimFormulario/>)
    }
  }

  PassaEtapa = () => {
    this.setState({
      controle: this.state.controle + 1
    })
  }


  render() {

    
    return (
      <Wrapper>
        {this.escolheEtapa()}
      </Wrapper>
    )
  }

}