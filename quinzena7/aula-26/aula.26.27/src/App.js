import React from 'react'
import styled from 'styled-components'
import LoginBox from './components/LoginBox'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export default class App extends React.Component{
  state ={
    email:'',
    password:''
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render(){
    return(
      <Wrapper>
            <LoginBox
            
            onChangeEmail = {this.onChangeEmail}
            onChangePassword ={this.onChangePassword}
            email = {this.state.email}
            password = {this.state.password}
            />
      </Wrapper>
    )
  }

}