import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
    ],
    inputNome:'',
    inputFoto:'',
    inputImagem:''
  }

  listaPosts = () => 
        this.state.posts.map((post,index) => {
          return(
            <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} key={index}/>
          )
        })

  adicionaPosts =() =>{
      const tempPosts = [...this.state.posts]
      tempPosts.push({
        nomeUsuario:this.state.inputNome,
        fotoUsuario:this.state.inputFoto,
        fotoPost: this.state.inputImagem
      })

      this.setState({
        posts:tempPosts,
        inputNome:'',
        inputFoto:'',
        inputImagem:''
      })

  }
        
  onChangeNome = (event) =>{
    this.setState({inputNome:event.target.value})
  }

  onChangeFoto = (event) =>{
    this.setState({inputFoto:event.target.value})
  }

  onChangeImagem = (event) =>{
    this.setState({inputImagem:event.target.value})
  }
  
  render() {

    return (
      <MainContainer>
        <input value={this.state.inputNome} onChange={this.onChangeNome} placeholder="Nome do usuário"/>
        <input value={this.state.inputFoto} onChange={this.onChangeFoto} placeholder='Link da foto de perfil'/> 
        <input value={this.state.inputImagem} onChange={this.onChangeImagem} placeholder='Link da foto do Post'/> 
        
        <button onClick={this.adicionaPosts}>INICIO</button>
        {this.listaPosts()}
      </MainContainer>
    );
  }


}


export default App;
