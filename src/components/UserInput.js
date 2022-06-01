import React, { useState } from 'react';
import {changeUser} from '../store/slices/userName.slices'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/input.css'
import logo from '../styles/images/pokedexLogo.png'

const UserInput = () => {

    const [user,setUser]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getName= e =>{
        e.preventDefault();
        dispatch(changeUser(user))
        navigate("/pokedex")
    };


    return (
        <div className='login'>
            <div className='login_logo'>
                <img src={logo} alt="logo" className='login_logo_img'/>
            </div>
            <div className='login-welcome'>
                <h2>Hola Entrenador!</h2>
                <p>Para acceder indicanos como podemos llamarte</p>
            </div>
            <form className='login-input' onSubmit={getName}>
                <input 
                    type="text" 
                    name="userName"
                    onChange={e=>setUser(e.target.value)}
                    value={user}
                    placeholder='Ingrese su nombre'
                />
                <button>Comenzar</button>
            </form>
            <div className='bars-container'>
                <div className='red-bar'></div>
                <div className='pokeball'><div className='pokeball2'></div></div>
                <div className='black-bar'></div>
            </div>
            
        </div>
    );
};

export default UserInput;