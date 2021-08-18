import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        display:flex ;
        justify-content: center;
        align-items: center;
        border: solid;
        border-radius: 10px;
        width: 30%;
        height: 40%;
`
const InputBox = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
`

const Input = styled.input`
        margin-bottom: 10px;
`
export default class extends React.Component {

    render() {
        return (
            <Wrapper>
                <InputBox>
                    <Input required placeholder='Email' onChange={this.props.onChangeEmail} value={this.props.email} />
                    <Input required placeholder='Senha' onChange={this.props.onChangePassword} value={this.props.password}/>
                    <button>Entrar</button>
                </InputBox>
            </Wrapper>
        )
    }

}