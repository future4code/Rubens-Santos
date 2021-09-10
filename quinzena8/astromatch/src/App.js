import './App.css';
import styled from 'styled-components'
import TelaInicial from './components/TelaInicial/telainicial';
import axios from 'axios';
import Matches from './components/Matches';
import React, { useState, useEffect } from 'react'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: darkblue;
`
const AppBox = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
  height: 600px;
  width: 400px;
  border-radius: 20px;
  background-color: white;
  position: relative;
`

const GoToMatches = styled.button`
    height: 60px;
    width: 40px;
    position: absolute;
    right: 0;
    background-color: white;
    border: none;
    border-radius: 20px;
`

const GoToFirstPage = styled.button`
    height: 60px;
    width: 40px;
    position: absolute;
    left: 0;
    background-color: white;
    border: none;
    border-radius: 20px;
`

const Icon = styled.img`
  width: 25px;
`


function App() {
  const [page, setPage] = useState(1)

  const matches = () => {
    switch (page) {
      case 1:
        setPage(2)
        break
      case 2:
        setPage(1)
        break
    }
  }

  const PageSwitch = () => {
    switch (page) {
      case 1:
        return (
          <TelaInicial />
        )
      case 2:
        return (
          <Matches />
        )
    }
  }

  const IconChange = () => {

    switch (page) {
      case 1:
        return (
          <GoToMatches onClick={matches}><Icon src='https://i.pinimg.com/564x/46/01/f7/4601f773e41c094849e10288a7aec5e8.jpg'/></GoToMatches>
        )
      case 2:
        return (
          <GoToFirstPage onClick={matches}><Icon src='https://i.pinimg.com/564x/82/04/bf/8204bf43eaec04006d1199116feb8852.jpg'/></GoToFirstPage>
        )

    }
  }

  return (
    <Wrapper >
      <AppBox>
        {IconChange()}
        {PageSwitch()}
      </AppBox>
    </Wrapper>
  );
}

export default App;
