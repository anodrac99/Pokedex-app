import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import '../styles/pokedex.css'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import pokebola from '../styles/images/pokeball.png'

const Pokedex = () => {
    const userName = useSelector(state=>state.userName)
    const [pokemons,setPokemons]=useState([]);
    
    const [currentPage,setCurrentPage]=useState(1);
    const[postPerPage/*, setPostPerPage */]=useState(20);
    const [pokemonSearch,setPokemonSearch]=useState("");
    const [pokemonTypes,setPokemonTypes]=useState([]);

    useEffect(()=>{
        
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then(r=>{
            setPokemons(r.data.results);
            
        });

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res=>setPokemonTypes(res.data.results));
    },[]);

    
    

    //get current post
    const indexOfLastPost=currentPage*postPerPage;
    const indexOfFirtsPost=indexOfLastPost-postPerPage;
    const currentPost= pokemons.slice(indexOfFirtsPost,indexOfLastPost);
    
    //change page
    const paginate=(pageNumber)=>{setCurrentPage(pageNumber)};


    //Filter and searching characters
    const navigate = useNavigate();
    const search=()=>{
        
        navigate(`/pokedex/${pokemonSearch}`)
    }

   
    const filter = e =>{
        if(e.target.value !=='Mostrar todos'){
            axios.get(e.target.value)
            .then(res=>setPokemons(res.data.pokemon))
        }else{
            axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
                .then(r=>{
                setPokemons(r.data.results);
                
            });

        };
        
    };

    

    

    


    return (
        <div className='pokedex-container'>
            <NavBar/>
            
            <p className='wellcome-text'><b>Bienvenido! {userName}</b>, aqui podras encontrar tu pokemon favorito!</p>
            
            <form className='search-box' onSubmit={search}>
                <input 
                    type="text"
                    placeholder='buscar pokemon'
                    value={pokemonSearch}
                    onChange={e=>setPokemonSearch(e.target.value)}
                    className='search-bar'
                />
                <button className='search-bar-button'><img src={pokebola} alt="" /></button>
                
            </form>

            <div className='filter-selector'>
                <select onChange={filter}>
                    <option>
                        Mostrar todos
                    </option>
                    {
                        pokemonTypes.map(type=>(
                            <option key={type.name} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="info-container">
                {
                    currentPost.map(pokemon=>(
                                
                        <li key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url }><PokemonCard 
                                    pokemon={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url }/>
                        </li>
                    ))
                }
            </div>
            
            <div>
                <Pagination postPerPage={postPerPage} totalPost={pokemons.length} paginate={paginate} currentPage={currentPage}/>
            </div>
            <br />
        </div>
    );
};

export default Pokedex;