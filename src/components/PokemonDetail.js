import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/pokemonDetail.css'
import colors from '../colors.json'

const PokemonDetail = () => {

    const {id} = useParams();

    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    }, [id]);



    const changeColors = () => {

        let actualColor = colors.filter(x => {
            
            return x.type === pokemon.types?.[0]?.type.name;

        })
        return actualColor[0]?.background
    };



    return (
        <div>
            <NavBar />
            <div className='detail-container'>
                <div className='info-container-detail'>

                    <div className='image-container-detail' style={{backgroundImage: changeColors()}}>
                        <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                    </div>

                    <div className='id-container'>
                        <h3>#{pokemon.id}</h3>
                    </div>

                    <div className='name-container-detail'>
                        <div className='vector-detail'> </div>
                        <div> 
                            <h4>{pokemon.name}</h4> 
                        </div>
                        <div className='vector-detail'> </div>
                    </div>

                    <div className='data-container'>
                        <div>
                            <p>peso</p>
                            <h6>{pokemon.weight}</h6>
                        </div>
                        <div>
                            <p>altura</p>
                            <h6>{pokemon.height}</h6>
                        </div>
                    </div>

                    
                    <div className='data-pokemon-detail'>

                        <div className='types-container'>
                            <div>Tipo</div>
                            <ul>
                                <li style={{backgroundImage: changeColors()}}>{pokemon.types?.[0]?.type.name}</li>
                                <li style={{backgroundImage: changeColors()}}>{pokemon.types?.[1]?.type.name}</li>
                            </ul>
                        </div>

                        <div className='abilities-container'>
                            <div>Habilidades</div>
                            <ul>
                                <li>{pokemon.abilities?.[0].ability.name}</li>
                                <li>{pokemon.abilities?.[1].ability.name}</li>
                            </ul>
                        </div>
                        
                    </div>
                    

                    <div className='stats-container-detail'>
                        <div>
                            <div>
                                <h4>HP:</h4>
                                <p>{pokemon.stats?.[0].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done'
                                style={{width:`${pokemon.stats?.[0].base_stat}%`, backgroundImage: changeColors()}}>

                                </div>

                            </div>  
                        </div>
                        <div>
                            <div>
                                <h4>ATAQUE</h4>
                                <p>{pokemon.stats?.[1].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{width:`${pokemon.stats?.[1].base_stat}%`, backgroundImage: changeColors()}}>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>DEFENSA:</h4>
                                <p>{pokemon.stats?.[2].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{width:`${pokemon.stats?.[2].base_stat}%`, backgroundImage: changeColors()}}>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>SEPEED:</h4>
                                <p>{pokemon.stats?.[5].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{width:`${pokemon.stats?.[5].base_stat > 100 ? 100 : pokemon.stats?.[5].base_stat}%`, backgroundImage: changeColors()}}>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='movements-container-detail'>
                    <div>
                        <div className='title-movements'>
                            <div>
                                <h4>Movements</h4>
                            </div>
                            <div className='vector-title-movements'>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <ul className='list-movements'>
                                { pokemon.moves?.map(move => (
                                    <li key={move.move.name}>{move.move.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default PokemonDetail;