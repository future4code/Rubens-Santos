import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App() {

  const [pokelist, setPokelist] = React.useState([]);
  const [pokeName, setPokename] = React.useState('');

  useEffect(()=>{
    pegaPokemon()
  },[])

  
  const pegaPokemon = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      setPokelist(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

 

  const changePokeName = event => {
    setPokename(event.target.value)
  };


    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  
}

export default App;
