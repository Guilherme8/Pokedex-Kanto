import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PokemonCard extends Component {
    state = {
        name: '',
        pokemonIndex: ''
    };

    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2]

        this.setState({
            name,
            pokemonIndex
        })
    }

    render(){
        return(
            <div className="col-md-3 col-sn-6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                <div className="card">                    
                    <h2 className="card-header">{this.state.pokemonIndex}</h2>
                    <div className="card-body mx-auto">
                       <h6 className="card-title">{this.state.name}</h6>
                    </div>                    
                </div>
                </Link>
            </div>
        );
    }
}