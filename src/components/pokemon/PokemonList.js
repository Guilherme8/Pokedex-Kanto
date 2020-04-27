import React, { Component } from 'react';
import Axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    //Definido a url de onde pegará as informações e as propriedades do componente
    state={
        url: `https://pokeapi.co/api/v2/pokemon`,
        name: '',
        pokemonIndex: '',
    };

    //É um metodo de ciclo de vida
    async componentDidMount(){
          const res = await Axios.get(this.state.url);
          this.setState({ pokemon: res.data['results'] });
    }

    //Render é o metodo para retornar o que quer ser exibido
    render(){
        return(
            <div> 
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard 
                              key={pokemon.name}
                              name={pokemon.name}
                              url={pokemon.url}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Carregando pokemon</h1>
                )}
            </div>
            //Fiz esse tipo de if para quando se tiver carregando exibir o carregando
        );
    }
}