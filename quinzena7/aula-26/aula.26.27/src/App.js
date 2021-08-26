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
  render(){
    return(
      <Wrapper>
            <LoginBox/>
      </Wrapper>
    )
  }

}