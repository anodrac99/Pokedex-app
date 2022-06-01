import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pokemonCard.css';
import colors from '../colors.json'

const PokemonCard = ({pokemon}) => {
    
    const [pokemonInfo,setPokemonInfo]=useState({});
    useEffect(()=>{
        axios.get(pokemon)
        .then(res=>setPokemonInfo(res.data))
    },[pokemon]);

   
    const navigate = useNavigate();
    
    const goDetail = (id) => {
        navigate(`/pokedex/${id}`);
    };

    
    
    const filterBorder = () => {
        let colorActual = colors.filter(e => {
            return e.type === pokemonInfo.types?.[0].type.name
        });
        return colorActual[0]?.border
    };

 const filterBackGroud = ()=>{
     let backActual = colors.filter(e=>{
        return e.type === pokemonInfo.types?.[0].type.name
     });
     return backActual[0]?.background
 };


    
    
    
    return (
        <div onClick={() => goDetail(pokemonInfo.id)} className='pokemon-card-container' style={{backgroundColor: filterBorder()}}>
            <div className='card-info'>

                <div className='image-container' style={{backgroundImage:filterBackGroud()}}>
                    <img className='pokemon-image' src={pokemonInfo.sprites?.other.dream_world.front_default} alt={pokemonInfo.name} />
                </div>
                
                <div className='stats-container'>
                    <h3>{pokemonInfo.name}</h3>
                    <div className='pokemon-type-container'>
                        { pokemonInfo.types?.length>1 ?
                            <h4>
                             {pokemonInfo.types?.[0].type.name} / {pokemonInfo.types?.[1]?.type.name}
                            </h4>
                            : 
                            <h4>
                                {pokemonInfo.types?.[0].type.name}
                            </h4>}
                        <p>TYPE</p>
                    </div>
                    <div className='stats-container1'>
                        <div>
                            <p>HP</p>
                            <h4>{pokemonInfo.stats?.[0].base_stat}</h4>
                        </div>
                        <div>
                            <p>ATTACK</p>
                            <h4>{pokemonInfo.stats?.[1].base_stat}</h4>
                        </div>
                    </div>
                    <div className='stats-container2'>
                        <div>
                            <p>DEFENSE</p>
                            <h4>{pokemonInfo.stats?.[2].base_stat}</h4>
                        </div>
                        <div>
                            <p>SPEED</p>
                            <h4>{pokemonInfo.stats?.[5].base_stat}</h4>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
};

export default PokemonCard;